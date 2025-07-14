import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, 
  IonRow, IonCol, IonLabel, IonInput, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contra-recuperar',
  templateUrl: './contra-recuperar.page.html',
  styleUrls: ['./contra-recuperar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonItem, 
    IonRow, IonCol, IonCardHeader, IonCardTitle,IonLabel, IonInput, IonButton, IonButtons, IonBackButton],
})
export class ContraRecuperarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
