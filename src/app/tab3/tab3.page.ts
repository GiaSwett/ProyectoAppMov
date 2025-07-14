import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonLabel, IonButton, IonCard,
  IonNote, IonCardContent, IonInput, IonThumbnail,
  IonIcon} from '@ionic/angular/standalone';
import { CarritoService } from '../services/carrito.service';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { trashOutline} from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonButton, IonLabel, CurrencyPipe, CommonModule, FormsModule,
    IonCard, IonNote, IonCardContent, IonInput, IonThumbnail, IonIcon],
})
export class Tab3Page {
  productos: any[] = [];
  total = 0;
  iva = 0;
  envio = 0;
  totalFinal = 0;
  
  constructor(private carritoService: CarritoService) {
    addIcons({ trashOutline });
  }

  ionViewWillEnter() {
    this.actualizarValores();
  }

  actualizarValores() {
    this.productos = this.carritoService.obtenerProductos();
    this.total = this.carritoService.totalPagar();
    this.iva = this.carritoService.calcularIVA();
    this.envio = this.carritoService.calcularEnvio();
    this.totalFinal = this.carritoService.calcularTotalFinal();
  }

  sumar(p: any) {
    this.carritoService.incrementarCantidad(p.id);
    this.actualizarValores();
  }

  restar(p: any) {
    this.carritoService.decrementarCantidad(p.id);
    this.actualizarValores();
  }

  eliminarDelCarrito(index: number) {
    this.carritoService.eliminarProducto(index);
    this.productos = this.carritoService.obtenerProductos(); // Refrescar lista
    this.actualizarValores();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.productos = [];
    this.actualizarValores();
  }
}
