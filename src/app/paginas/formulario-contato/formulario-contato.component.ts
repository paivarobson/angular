import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent {
  contatoFor!: FormGroup;

  constructor() {
    this.contatoFor = new FormGroup({
      nome: new FormControl('Paiva'),
      telefone: new FormControl(''),
      email: new FormControl(''),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }
}
