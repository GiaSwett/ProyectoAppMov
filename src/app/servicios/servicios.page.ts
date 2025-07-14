import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, 
  IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, 
    IonCardTitle, IonButton, IonBackButton, IonButtons]
})
export class ServiciosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
