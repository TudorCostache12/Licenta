import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  
  template: `
    
    <router-outlet />
    `,
    
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend_licenta';
}
