import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, ActionSheetController, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, gridOutline, cartOutline, personCircleOutline, addCircle, personOutline, settingsOutline, 
  logOutOutline, closeOutline} from 'ionicons/icons';
import { Auth, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  private actionSheetCtrl = inject(ActionSheetController);
  private auth = inject(Auth);
  private router = inject(Router);

  constructor() {
    addIcons({ home, gridOutline, cartOutline, personCircleOutline, addCircle, personOutline, settingsOutline, logOutOutline, closeOutline });
  }

  async mostrarMasOpciones() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Servicio Tecnico',
          icon: 'person-outline',
          handler: () => {
            this.router.navigate(['/servicios']);
          },
        },
        {
          text: 'Configuración',
          icon: 'settings-outline',
          handler: () => {
            this.router.navigate(['/configuracion']);
          },
        },
        {
        text: 'Cerrar sesión',
        role: 'destructive',
        icon: 'log-out-outline',
        handler: async () => {
          try {
            await signOut(this.auth);
            console.log('Sesión cerrada');
            
            this.router.navigate(['/tabs/tab1']);
          } catch (error) {
            console.error('Error al cerrar sesión:', error);
          }
        },
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel',
      },
      ],
    });

    await actionSheet.present();
  }
}
