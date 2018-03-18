import { Component, OnInit } from '@angular/core';
// import { CAIXAS } from '../../mockdb/mock-caixas';
import {CaixasService} from '../../services/caixas.service';
import {CaixasInterface} from '../../models/caixas-interface';

@Component({
  selector: 'app-lista-caixas',
  templateUrl: './lista-caixas.component.html',
  styleUrls: ['./lista-caixas.component.scss']
})
export class ListaCaixasComponent implements OnInit {

  // caixas = CAIXAS;
  caixas: CaixasInterface[];
  numeroAnterior: number;
  flag: CaixasInterface = { formVisible: true };

  constructor(private caixasService: CaixasService) { }

  ngOnInit() {
    this.caixasService.getCaixas().subscribe(
      CAIXAS => {
        // console.log(CAIXAS);
        this.caixas = CAIXAS;
      }
    );
  }

  toogleFormVisible(numeroDaCaixa: number) {


      if (this.numeroAnterior) { // verifica se o numeroAnterior já foi definido (para evitar mensagens de erro)
        this.caixas[this.numeroAnterior - 1].formVisible = false;
      }
      Object.assign(this.caixas[numeroDaCaixa - 1], this.flag); // coloca formVisible = true
      this.numeroAnterior = numeroDaCaixa;
      // return console.log('x=', this.caixas[numeroDaCaixa - 1]); // para testes. eliminar esta linha


  }

  onSubmit(numeroDaCaixa: number, ficha, marca, modelo, tipo) {
    if (ficha.value) {
      // se a input ficha tiver valor
      this.caixas[numeroDaCaixa - 1].ficha = ficha.value;
      this.caixas[numeroDaCaixa - 1].marca = marca.value;
      this.caixas[numeroDaCaixa - 1].modelo = modelo.value;
      this.caixas[numeroDaCaixa - 1].tipo = tipo.value;
      this.caixas[numeroDaCaixa - 1].formVisible = false;

      this.caixasService.updateCaixas(this.caixas[numeroDaCaixa - 1]);
    } else {
      // senão informa que é obrigatório indicar ficha
      alert('É obrigatório preencher a ficha para poder submeter.');
    }


  }

  criarCaixas(qty: number)  {
    let x: number = (this.caixas.length + 1);
    for (let i = 0; i < qty; i++) {
      const caixa: CaixasInterface = {numero: x};
      console.log(x);
      this.caixasService.addCaixas(caixa);
      x = x + 1;

    }
  }

  clean(numeroDaCaixa: number) {
    this.caixas[numeroDaCaixa - 1].ficha = null;
    this.caixas[numeroDaCaixa - 1].marca = null;
    this.caixas[numeroDaCaixa - 1].modelo = null;
    this.caixas[numeroDaCaixa - 1].tipo = null;
    this.caixas[numeroDaCaixa - 1].formVisible = false;

    this.caixasService.updateCaixas(this.caixas[numeroDaCaixa - 1]);
  }

}
