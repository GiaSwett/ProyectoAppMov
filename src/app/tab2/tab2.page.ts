import { Component, inject} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonSegmentButton, IonList, IonItem, IonSegment,
  IonThumbnail, IonLabel, IonText, IonButtons, IonIcon} from '@ionic/angular/standalone';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../services/carrito.service';
import { addIcons } from 'ionicons';
import { addCircleOutline} from 'ionicons/icons';

//InsertarDatosFirebase
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CurrencyPipe, IonList, 
    IonItem, IonSegment, IonSegmentButton, IonThumbnail, IonLabel, IonText, IonButtons, CommonModule, FormsModule, IonIcon],
})
export class Tab2Page {
  private firestore = inject(Firestore);

  seleccion: string = 'celulares';

  productosCelulares: any[] = [];
  productosTecnologia: any[] = [];
  productosAccesorios: any[] = [];
  productosParlantes: any[] = [];
  productosImpresoras: any[] = [];
  productosCamaras: any[] = [];

  constructor(private carritoService: CarritoService) {
    addIcons({ addCircleOutline});

    this.cargarProductos('celulares', 'productosCelulares');
    this.cargarProductos('Tecnologia', 'productosTecnologia');
    this.cargarProductos('Accesorios', 'productosAccesorios');
    this.cargarProductos('Parlantes', 'productosParlantes');
    this.cargarProductos('Impresora', 'productosImpresoras');
    this.cargarProductos('camaras', 'productosCamaras');
  }

  cargarProductos(categoria: string, arreglo: string) {
    const productosRef = collection(this.firestore, 'Productos');
    const q = query(productosRef, where('CategoriaID', '==', categoria));

    collectionData(q, { idField: 'id' }).subscribe((data: any[]) => {
      (this as any)[arreglo] = data;
    });
  }

  agregar(producto: any) {
    const productoConCantidad = { ...producto, cantidad: 1 };
    this.carritoService.agregarProducto(productoConCantidad);
  }

}