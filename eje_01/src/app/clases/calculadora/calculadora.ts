export class Calculadora 
{
   
    public static Sumar(unNumero:GLint ,otroNumero:GLint):GLint | null
    {
      return unNumero + otroNumero;
    }
  
    public static Dividir(unNumero:GLint | null,otroNumero:GLint): GLfloat | null
    {
      let dividir = null;
      if(unNumero  != undefined && otroNumero != 0 )
      {
        dividir = unNumero / otroNumero;
      }
  
      return dividir;
    }
  
}
