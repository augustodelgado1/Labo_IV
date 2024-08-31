import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import internal from 'node:stream';
import { Calculadora } from './clases/calculadora/calculadora';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CalculadoraComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'titulo';
 


  
 
  
}

