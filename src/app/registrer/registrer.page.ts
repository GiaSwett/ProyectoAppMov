import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol,  IonCard, IonCardContent, IonCardTitle, 
  IonCardHeader, IonItem, IonLabel, IonInput, IonButton, ToastController, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.page.html',
  styleUrls: ['./registrer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRow, IonCol, IonCard, 
    IonCardContent, IonCardTitle, IonCardHeader, IonItem, IonLabel, IonInput, IonButton, RouterModule, IonBackButton, IonButtons],
})

export class RegistrerPage {

  constructor() {
  console.log('Página de registro cargada');
  }

  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private toastCtrl = inject(ToastController);

  //datos del usuario
  correo: string = '';
  confirmarCorreo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  nombre: string = '';
  apellido: string = '';

  async registrar() {
    // Validar que los correos coincidan
    if (this.correo !== this.confirmarCorreo) {
      const toast = await this.toastCtrl.create({
        message: 'Los correos electrónicos no coinciden',
        duration: 3000,
        color: 'danger',
      });
      await toast.present();
      return;
    }

    // Validar que las contraseñas coincidan
    if (this.contrasena !== this.confirmarContrasena) {
      const toast = await this.toastCtrl.create({
        message: 'Las contraseñas no coinciden',
        duration: 3000,
        color: 'danger',
      });
      await toast.present();
      return;
    }

    //validar contraseña
    if (!this.validarContrasena(this.contrasena)) {
      const toast = await this.toastCtrl.create({
        message: 'Contraseña inválida',
        duration: 3000,
        color: 'danger',
      });
      await toast.present();
      return;
    }

    //validar correo
    if (!this.validarEmail(this.correo)) {
      const toast = await this.toastCtrl.create({
        message: 'Correo inválido',
        duration: 3000,
        color: 'danger',
      });
      await toast.present();
      return;
    }
    
    try {
      const credenciales = await createUserWithEmailAndPassword(this.auth, this.correo, this.contrasena);
      const user = credenciales.user;

      // Guardar datos adicionales en Firestore
      const userRef = doc(this.firestore, `usuarios/${user.uid}`);
      await setDoc(userRef, {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo
      });

      // Mostrar mensaje de éxito y error
      const toast = await this.toastCtrl.create({
        message: 'Usuario registrado exitosamente.',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
      // Limpiar campos
      this.correo = '';
      this.confirmarCorreo = '';
      this.contrasena = '';
      this.confirmarContrasena = '';
      this.nombre = '';
      this.apellido = '';
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      const toast = await this.toastCtrl.create({
        message: 'Usuario ya registrado.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

  private validarContrasena(contrasena: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{8,12}$/;
    return regex.test(contrasena);
  }

  private validarEmail(correo: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(correo);
}

}
