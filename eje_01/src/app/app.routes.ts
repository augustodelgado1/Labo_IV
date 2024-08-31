import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';

export const routes: Routes = [
    { path: "Calculadora", component: CalculadoraComponent}
];
