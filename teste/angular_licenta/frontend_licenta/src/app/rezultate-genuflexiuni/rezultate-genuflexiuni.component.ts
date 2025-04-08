import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-rezultate-genuflexiuni',
  imports: [NgIf, MatTableModule],
  templateUrl: './rezultate-genuflexiuni.component.html',
  styleUrl: './rezultate-genuflexiuni.component.css'
})
export class RezultateGenuflexiuniComponent {

  evaluare_id : string = '';
  ok : boolean = false;
  rezultate : any;
  coloane_front : string[] = ['adancime_front', 'deviatie_coborare', 'deviatie_urcare', 'dif_nivel_solduri_coborare', 'dif_nivel_solduri_urcare', 'dif_nivel_solduri_z_coborare', 'dif_nivel_solduri_z_urcare']
  coloane_profil : string[] = ['adancime_profil', 'flexie_sold', 'flexie_genunchi', 'dorsiflexie_glezna'] 
  
  constructor(private http_client : HttpClient) {}
  
  async ngOnInit()
  {

    const ruta_dinspre_evaluare_genuflexiuni = localStorage.getItem("evaluareSpreRezultateGenuflexiuni")
    
    if(ruta_dinspre_evaluare_genuflexiuni === 'true')
    {
      console.log(ruta_dinspre_evaluare_genuflexiuni)
      localStorage.setItem("evaluareSpreRezultateGenuflexiuni", 'false');
      this.evaluare_id = await this.getIdUltimaEvaluare();
      this.getEvaluare(this.evaluare_id)
    }
    
    else
    {
      const id = localStorage.getItem('id_pt_afisat');
      if(id)
        this.getEvaluare(id);
      else
        console.log("id-ul nu este in localStorage");
    }
  }

  getIdUltimaEvaluare(): Promise<string> 
    {
        return new Promise<string>((resolve, reject) => 
        {
          const token = localStorage.getItem('token');
      
          this.http_client.get<any>(`http://127.0.0.1:8001/id_ultima_evaluare/?token=${token}`).subscribe(
            raspuns => {
              console.log("utima_evaluare_id transmis cu succes:", raspuns.utima_evaluare_id);
              resolve(raspuns.utima_evaluare_id);
            },
            error => {
              console.error("utima_evaluare_id nu a putut fii transmis:", error);
              reject(error);
            }
          );
        });
    }


     getEvaluare(evaluare_id: string)
      {
      
          const token = localStorage.getItem('token');
    
          this.http_client.get<any>(`http://127.0.0.1:8001/evaluare/${evaluare_id}?token=${token}`).subscribe(
            raspuns =>
            {
              this.ok = true; 
              console.log("Evaluarea genuflexiunilor a fost gasita:", evaluare_id, raspuns);
              this.rezultate = raspuns.rezultate;
              console.log(this.rezultate)
            },
            error =>
            {
              console.error("Evaluarea genuflexiunilor nu a putut fii găsita în baza de date:", error);
            }
          );
        }

}
