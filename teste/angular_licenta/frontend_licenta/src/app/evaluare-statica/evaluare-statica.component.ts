import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-evaluare-statica',
  imports: [NgIf],
  templateUrl: './evaluare-statica.component.html',
  styleUrl: './evaluare-statica.component.css'
})
export class EvaluareStaticaComponent {
  fisier_upload : File = new File([], "");
  url_upload : string | null = null;
  url_img_prelucrata_front : string | null = null;
  url_img_prelucrata_profil : string | null = null;


  constructor(private http_client : HttpClient) {}

  selectareFisier(event : any)
  {
    if(this.fisier_upload)
    {
      this.fisier_upload = event.target.files[0];
      this.url_upload = URL.createObjectURL(this.fisier_upload);
    }
    else
      alert("A avut loc o problema! fisierul nu poate fi deschis sau nu exista.")
  }


  incarcareImagine(tip_img : number)
  {
    if (this.fisier_upload.size > 0)
    {
      const form_imagine = new FormData();
      form_imagine.append('imagine_incarcata', this.fisier_upload, this.fisier_upload.name);
      form_imagine.append('tip_img', tip_img.toString());

      this.http_client.post<any>('http://127.0.0.1:8000/upload/', form_imagine).subscribe(
        next_upload  => 
        {
          console.log("Imagine incarcata cu succes: ", next_upload);
          this.incarcareImaginePrelucrata(tip_img);
        }
        
      )
      
    }
    else alert("Nu ati selectat nicio imagine!")
  }

  incarcareImaginePrelucrata(tip_img : number)
  {
    if(this.fisier_upload.size > 0)
    {
      const nume_imagine = this.fisier_upload.name;
      const path_img_procesata = `http://127.0.0.1:8000/processed/processed_${nume_imagine}`
      this.http_client.get<any>(path_img_procesata, {responseType : 'blob' as 'json'}).subscribe(
        next_procesare=>
        {
          console.log("imagine prelucrata cu succes: ", next_procesare)
          if(tip_img == 1)
            this.url_img_prelucrata_front = path_img_procesata
          else if(tip_img == 2)
            this.url_img_prelucrata_profil = path_img_procesata
        }
      )
    }
  }
  


}
