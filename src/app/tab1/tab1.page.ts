import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, 
  IonCardHeader, IonButton, IonGrid, IonSearchbar,
  IonIcon} from '@ionic/angular/standalone';
import { search, addCircleOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,  IonRow , IonCol, IonCard, IonCardContent, IonCardTitle, 
    IonCardHeader, IonButton, IonGrid, IonSearchbar, RouterModule, IonIcon],
})
export class Tab1Page {
  constructor() {
    addIcons({ search, addCircleOutline });
  }

  //variables

  //métodos
}