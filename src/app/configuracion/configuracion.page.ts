import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonToggle,
  IonButtons, IonBackButton, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, 
    IonToggle, IonLabel, IonButtons, IonBackButton, IonButton]
})
export class ConfiguracionPage{

  constructor() { }

  notificaciones = true;
  modoOscuro = false;

}
