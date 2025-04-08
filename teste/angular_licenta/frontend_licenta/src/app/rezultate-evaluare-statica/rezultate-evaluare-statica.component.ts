import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-rezultate-evaluare-statica',
  imports: [NgIf, MatTableModule],
  templateUrl: './rezultate-evaluare-statica.component.html',
  styleUrl: './rezultate-evaluare-statica.component.css'
})
export class RezultateEvaluareStaticaComponent {

  
  test_id : string = '';
  rezultate : any;
  imagine_front : string | null = null;
  imagine_profil : string | null = null;
  coloane_front : string[] = ["diferenta_urechi", "diferenta_umeri", "diferenta_solduri", "diferenta_genunchi", "diferenta_glezne"]
  coloane_profil : string[] = ["umeri", "solduri", "genunchi", "glezne"]
  constructor(private http_client : HttpClient) {}

  async ngOnInit()
  {
    const ruta_dinspre_evaluare_statica = localStorage.getItem("evaluareSpreRezultate")

    if(ruta_dinspre_evaluare_statica === 'true')
    {
      console.log("asdadw")
      localStorage.setItem("evaluareSpreRezultate", 'false');
      this.test_id = await this.getIdUltimulTest();
      this.getTest(this.test_id);
    }
      
    else
    {
      console.log("asdasda")
      const id = localStorage.getItem('id_pt_afisat');
      if(id)
        this.getTest(id);
      else
        console.log("id-ul nu este in localStorage");
    }
      


  }

  getIdUltimulTest(): Promise<string> 
  {
      return new Promise<string>((resolve, reject) => 
      {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
        this.http_client.get<any>('http://127.0.0.1:8000/id_ultimul_test/', { headers }).subscribe(
          raspuns => {
            console.log("ultimul_id transmis cu succes:", raspuns.utimul_test_id);
            resolve(raspuns.utimul_test_id);
          },
          error => {
            console.error("ultimul_id nu a putut fii transmis:", error);
            reject(error);
          }
        );
      });
  }

  getTest(test_id: string)
  {
  
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http_client.get<any>(`http://127.0.0.1:8000/test/${test_id}`, { headers }).subscribe(
        raspuns =>
        {
          console.log("Testul a fost gasit:", test_id, raspuns);
          this.imagine_front = 'data:image/jpeg;base64,' + raspuns.imagine_front;
          this.imagine_profil = 'data:image/jpeg;base64,' + raspuns.imagine_profil;
          this.rezultate = [raspuns.rezultate];
          console.log(this.rezultate)
        },
        error =>
        {
          console.error("Testul nu a putut fi găsit în baza de date:", error);
        }
      );
    }
  

}
