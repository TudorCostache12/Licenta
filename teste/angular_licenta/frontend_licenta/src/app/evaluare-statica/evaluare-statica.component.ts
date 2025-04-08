import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgIf } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from '../components/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluare-statica',
  imports: [NgIf, MatTableModule, HeaderComponent],
  templateUrl: './evaluare-statica.component.html',
  styleUrl: './evaluare-statica.component.css'
})
export class EvaluareStaticaComponent {

  fisier_upload_front : File = new File([], "");
  fisier_upload_profil : File = new File([], "");
  url_upload_front : string | null = null;
  url_upload_profil : string | null = null;
  url_img_prelucrata_front : string | null = null;
  url_img_prelucrata_profil : string | null = null;
  date_postura : any;
  evaluare : boolean = false;
  coloane_front : string[] = ["diferenta_urechi", "diferenta_umeri", "diferenta_solduri", "diferenta_genunchi", "diferenta_glezne"]


  constructor(private http_client : HttpClient, private router: Router) {}
  

  selectareFisier(event : any, tip_img : number)
  {
    if(this.fisier_upload_front || this.fisier_upload_profil)
    {
      if (tip_img == 1)
      {
        this.fisier_upload_front = event.target.files[0];
        this.url_upload_front = URL.createObjectURL(this.fisier_upload_front);
      }
        
      else
      {
        this.fisier_upload_profil = event.target.files[0];
        this.url_upload_profil = URL.createObjectURL(this.fisier_upload_profil);
      }

        
    }
    else
      alert("A avut loc o problema! fisierul nu poate fi deschis sau nu exista.")
  }


  incarcareImagini()
  {
    if (this.fisier_upload_front.size > 0 && this.fisier_upload_profil.size > 0)
    {
      const form_imagini = new FormData();
      form_imagini.append('imagine_front', this.fisier_upload_front, this.fisier_upload_front.name);
      form_imagini.append('imagine_profil', this.fisier_upload_profil, this.fisier_upload_profil.name);

      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      console.log('Token:', token);  // Verifică dacă tokenul există
      console.log(localStorage.getItem('token'));
      if (!token) 
      {
        console.error('Nu există token valid!');
        return;
      }

      this.http_client.post<any>('http://127.0.0.1:8000/upload/', form_imagini, { headers }).subscribe(
        next_upload  => 
        {
          console.log("Imagini incarcate cu succes: ", next_upload);
          this.evaluare = true;
        }
        
      )
      
    }
    else alert("Nu ati selectat ambele imagini!")
  }

  


  extragereDatePostura()
  {
    this.http_client.get<any>('http://127.0.0.1:8000/distante_postura_statica/').subscribe(
      data => 
      {
        console.log(data);
        this.date_postura = [data];
      }
    )
  }

  navigareSpreRezultate()
  {
    localStorage.setItem("evaluareSpreRezultate", 'true');
    this.router.navigate(['/rezultate-evaluare-statica']);
  }


}
