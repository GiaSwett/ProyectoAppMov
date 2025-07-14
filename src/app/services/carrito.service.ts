import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: any[] = [];

  constructor() {}

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos;
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  vaciarCarrito() {
    this.productos = [];
  }

  totalPagar(): number {
    return this.productos.reduce((total, p) => total + (p.Precio * p.cantidad), 0);
  }

  incrementarCantidad(productoId: string) {
    const p = this.productos.find(p => p.id === productoId);
    if (p) p.cantidad++;
  }

  decrementarCantidad(productoId: string) {
    const p = this.productos.find(p => p.id === productoId);
    if (p && p.cantidad > 1) p.cantidad--;
  }

  calcularIVA(): number {
    return this.totalPagar() * 0.15;
  }

  calcularEnvio(): number {
    return this.productos.length > 0 ? 2 : 0;
  }

  calcularTotalFinal(): number {
    return this.totalPagar() + this.calcularIVA() + this.calcularEnvio();
  }
}
