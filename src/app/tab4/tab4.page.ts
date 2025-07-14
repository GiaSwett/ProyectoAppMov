import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonSegment, IonSegmentButton,
  IonList, IonLabel, AlertController, IonItem, IonInput, IonButtons, IonButton, IonSegmentView, IonSegmentContent} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar, IonSegment, IonSegmentButton, 
    IonItem, IonList, IonLabel, IonInput, IonButtons, IonButton, IonSegmentView, IonSegmentContent],
})
export class Tab4Page {
  private auth = inject(Auth);
  private alertCtrl = inject(AlertController);
  private router = inject(Router);
  private firestore = inject(Firestore);

  usuarios: User | null = null;
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  direccion: string = '';
  apellido: string = '';

  seleccionado: string = 'informacion';

  constructor() {

    onAuthStateChanged(this.auth, async (user) => {
      //si no hay usuario autenticado
      if (!user) {
        const alert = await this.alertCtrl.create({
          header: '¡Inicia sesión!',
          message: 'Para acceder a esta sección, necesitas iniciar sesión o registrarte.',
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel'
            },
            {
              text: 'Iniciar sesión',
              handler: () => {
                this.router.navigate(['/login']);
              }
            }
          ]
        });

        await alert.present();
      } else {
        // Ya autenticado 
        const docRef = doc(this.firestore, `usuarios/${user.uid}`);
        const snapshot = await getDoc(docRef);

        let nombre = 'Usuario';

        if (snapshot.exists()) {
          const data = snapshot.data();
          this.nombre = data['nombre'] ?? 'Usuario';
          this.apellido = data['apellido'] ?? 'Usuario';
          this.correo = data['correo'] ?? 'Usuario';
          this.telefono = data['telefono'] ?? 'Usuario';
          this.direccion = data['direccion'] ?? 'Usuario';
        }

        const alertaBienvenida = await this.alertCtrl.create({
          header: '¡Bienvenido!',
          message: `Hola ${nombre}, aqui vas a poder ver tu información y tus pedidos.`,
          buttons: ['Cerrar']
        });

        await alertaBienvenida.present();
      }
    });
  }
}
