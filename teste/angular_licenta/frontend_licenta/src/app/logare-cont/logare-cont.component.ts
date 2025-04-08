import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logare-cont',
  imports: [RouterLink],
  templateUrl: './logare-cont.component.html',
  styleUrl: './logare-cont.component.css'
})
export class LogareContComponent {
  parola : string = '';
  username : string = '';
  mesaj_logare :string = '';

  constructor(private http_client: HttpClient, private router: Router) {}

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

  logareCont()
  {
    if (this.parola.trim() === '' || this.username.trim() === '') 
      {
        this.mesaj_logare = "Completați toate câmpurile!";
      setTimeout(() =>
        {
          this.mesaj_logare = '';
        }, 3000);
        return;
      }

      const date_logare_cont = 
      {
        parola : this.parola,
        username : this.username
      }

      console.log("Date trimise:", date_logare_cont);
      this.http_client.post<any>('http://127.0.0.1:8000/logare_cont/', date_logare_cont).subscribe(
        raspuns =>
        {
          console.log("Răspuns server:", raspuns);
          this.mesaj_logare = "Intrarea in cont s-a facut cu succes!";
          localStorage.setItem('token', raspuns.access_token)
          console.log(localStorage.getItem('token'));
          this.router.navigate(['']);
        },
        error =>
        {
          this.mesaj_logare = "Email sau parolă greșită!";
            setTimeout(() =>
            {
              this.mesaj_logare = '';
            }, 3000);
          console.error('Eroare la autentificare', error);
        }
      )
  }
}
