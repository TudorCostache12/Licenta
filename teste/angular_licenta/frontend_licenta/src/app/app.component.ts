import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EvaluareStaticaComponent } from './evaluare-statica/evaluare-statica.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, EvaluareStaticaComponent],
  
  template: `
    <app-header />
    <app-evaluare-statica />`,

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_licenta';
}
