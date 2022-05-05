import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dados = [{nome: 'das', c:'sad'}, {nome: 'das', c:'sad'}];

  constructor(public toastController: ToastController) {}

}
