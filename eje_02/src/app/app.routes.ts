import { Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';

export const routes: Routes = [
    {path: "Bienvenido", component: BienvenidoComponent}
    ,{path: "login", component: LoginComponent}
    ,{path: "error", component: ErrorComponent}
];
