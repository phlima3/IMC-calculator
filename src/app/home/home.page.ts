import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peso = 0;
  altura = 0;
  resultado;
  resultadoFormatado;
  classificacao;

  constructor() {}

  calcularIMC() {
    this.resultado = this.peso / (this.altura * this.altura);
    this.resultadoFormatado = this.resultado.toFixed(2);
    if (this.resultadoFormatado < 18.5) {
      this.classificacao = 'Abaixo do peso';
    } else if (this.resultadoFormatado <= 29.9) {
      this.classificacao = 'Peso normal';
    } else if (this.resultadoFormatado <= 34.9) {
      this.classificacao = 'Obesidade grau 1';
    } else if (this.resultadoFormatado <= 39.9) {
      this.classificacao = 'Obesidade grau 2';
    } else {
      this.classificacao = 'Obesidade mórbida';
    }
  }
}
