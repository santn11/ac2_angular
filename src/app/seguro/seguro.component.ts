import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent {

  nomeSegurado: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number = 0;

  calcularApolice() {
    if (this.sexo === 'masculino') {
      if (this.idade <= 25) {
        this.valorApolice = 0.15 * this.valorAutomovel;
      } else {
        this.valorApolice = 0.10 * this.valorAutomovel;
      }
    } else if (this.sexo === 'feminino') {
      this.valorApolice = 0.08 * this.valorAutomovel;
    } 
  }
}
