import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonRow, IonGrid, IonCol, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonButton, ToastController, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonLabel, IonInput, 
    IonRow, IonGrid, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonButtons, IonBackButton],
})
export class LoginPage {

  constructor() { 
    console.log('Página de inicio de sesión cargada');
  }

  private auth = inject(Auth);
  private toastCtrl = inject(ToastController);
  private router = inject(Router);

  //variables de inicio de sesión
  correo: string = '';
  contrasena: string = '';

  async iniciarSesion() {
    try {
      await signInWithEmailAndPassword(this.auth, this.correo, this.contrasena);
      const toast = await this.toastCtrl.create({
        message: 'Inicio de sesión exitoso',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
      
       this.router.navigate(['/tabs/tab1']); // Redirigir a la pestaña 1 después del inicio de sesión exitoso

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      const toast = await this.toastCtrl.create({
        message: 'Error al iniciar sesión. Verifica tus credenciales.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

}
