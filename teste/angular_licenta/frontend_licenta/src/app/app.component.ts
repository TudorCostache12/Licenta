import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { EvaluareStaticaComponent } from './evaluare-statica/evaluare-statica.component';
import { ExercitiuLiveComponent} from './exercitiu-live/exercitiu-live.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  
  template: `
    <app-header />
    <router-outlet />
    `,
    
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_licenta';
}
