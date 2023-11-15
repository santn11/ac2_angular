import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formData: any = {};

  submitForm(form: any) {
    if (form.valid) {
      // Processar os dados do formulário aqui
      console.log(this.formData);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
