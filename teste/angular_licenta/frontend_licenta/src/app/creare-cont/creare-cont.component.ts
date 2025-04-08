import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-creare-cont',
  imports: [RouterLink],
  templateUrl: './creare-cont.component.html',
  styleUrl: './creare-cont.component.css'
})
export class CreareContComponent {
  email : string = '';
  parola : string = '';
  username : string = '';
  mesaj_creare :string = '';

  constructor(private http_client: HttpClient) {}

  updateMail(event : Event)
  {
    const input = event.target as HTMLInputElement;
    this.email = input.value;
  }

  updateParola(event : Event)
  {
    const input = event.target as HTMLInputElement;
    this.parola = input.value;
  }

  updateUserName(event : Event)
  {
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }

  creareCont() 
  {
    if (this.email.trim() === '' || this.parola.trim() === '' || this.username.trim() === '') 
    {
      this.mesaj_creare = "Completați toate câmpurile!";
      setTimeout(() =>
        {
          this.mesaj_creare = '';
        }, 3000);
      
      return;
    }

    const date_creare_cont = 
    {
      email : this.email,
      parola : this.parola,
      username : this.username
    }

    
    this.http_client.post<any>('http://127.0.0.1:8000/creeaza_cont/', date_creare_cont).subscribe(
      raspuns =>
      {
        console.log("Răspuns server:", raspuns);
        this.mesaj_creare = "Cont creat cu succes!";
      }, 
      error =>
      {
        console.error("Contul nu a putut fi creat: ", error)
        alert("Username sau mail deja existente")
      }
    )
  }
}
