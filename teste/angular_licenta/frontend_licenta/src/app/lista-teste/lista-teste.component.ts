import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../components/header/header.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-teste',
  imports: [MatTableModule, HeaderComponent],
  templateUrl: './lista-teste.component.html',
  styleUrl: './lista-teste.component.css'
})
export class ListaTesteComponent {

  evaluari_genuflexiuni : any[] = [];
  teste_postura : any[] = [];
  coloane : string[] = ['tip', 'datetime'];

  constructor(private http: HttpClient, private router: Router) {}

  async ngOnInit()
  {
    this.afisareEvaluariGenuflexiuni()
  }

  afisareEvaluariGenuflexiuni()
  {
    const token = localStorage.getItem('token');
    this.http.get<any[]>(`http://127.0.0.1:8001/lista_evaluari/?token=${token}`).subscribe(
      raspuns =>
      {
        const filtru_test_postura = raspuns.filter(test => test.tip === 'analiza_postura');
        const filtru_eval_genuflexiuni = raspuns.filter(test => test.tip === 'evaluare_genuflexiuni');
        console.log(raspuns)
        this.evaluari_genuflexiuni = filtru_eval_genuflexiuni.map
        (
            test =>
            (
              {
                id : test._id,
                tip : 'Evaluare genuflexiuni',
                datetime : new Date(test.datetime).toLocaleDateString('ro-RO',
                  {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  }
                ),
              }
            )
        ) 

        this.teste_postura = filtru_test_postura.map
        (
            test =>
            (
              {
                id : test._id,
                tip : 'Evaluare posturală',
                datetime : new Date(test.datetime).toLocaleDateString('ro-RO',
                  {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  }
                )
              }
            )
        ) 
        console.log(this.teste_postura)
      }
    )
  }

  navigareSpreRezultate(test : any)
  {
    console.log('Test selectat:', test);
    localStorage.setItem("id_pt_afisat", test.id)
    console.log(test.id)
    if(test.tip === 'Evaluare posturală')
      this.router.navigate(['/rezultate-evaluare-statica']);
    else
      this.router.navigate(['/rezultate-evaluare-genuflexiuni']);
  }

}
