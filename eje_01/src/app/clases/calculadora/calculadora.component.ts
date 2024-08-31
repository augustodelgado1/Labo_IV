import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Calculadora } from './calculadora';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  edadUno:string ;
  edadDos: string;
  mensaje: string | null;
  suma: GLint | null;
  promedio:  GLfloat | null;
 
  constructor() 
  {
    this.mensaje = "Ingrese los datos";
    this.edadUno = "";
    this.edadDos= "";
    this.suma = null;
    this.promedio = null;
  }

  public LimpiarTextBox() : void
  {
    this.edadUno = "";
    this.edadDos= "";
    this.suma = null;
    this.promedio = null;
  }

  public Calcular() : void
  {
    let unNumero = parseInt(this.edadUno);
    let otroNumero = parseInt(this.edadDos);
    this.mensaje = "No se pudo realizar el calculo";
    
    if(isNaN(unNumero) == false &&  isNaN(otroNumero) == false && unNumero > 0 && otroNumero  > 0 )
    {
      this.suma = Calculadora.Sumar(unNumero,otroNumero);
      this.promedio = Calculadora.Dividir(this.suma,2);
      this.mensaje = "El calculo se realizo correctamente";
    }

  }
  
}
