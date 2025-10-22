import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto{
  id:number;
  nombre:string;
  precio:number;
  estado:"Disponible"|"Agotado"|"En Oferta"
  imagen:string;
  categoria:number;
}
interface Categoria{
  id:number;
  nombre:string;
  descuento:number;
}

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  descuento:number=0.10;
   categorias:Categoria[]=[
    {id:1,nombre:"Línea Blanca",descuento:0.10},
    {id:2,nombre:"Electrónica",descuento:0.15}
  ]

  productos:Producto[]=[
    {id:0,nombre:"Televisión",precio:100,estado:"En Oferta",imagen:"/imgElectronics/tv.webp",categoria:2},
    {id:1,nombre:"Lavadora",precio:200,estado:"En Oferta",imagen:"/imgElectronics/lavadora.webp",categoria:1},
    {id:2,nombre:"Plancha",precio:70,estado:"En Oferta",imagen:"/imgElectronics/plancha.webp",categoria:1},
    {id:3,nombre:"Monitor",precio:150,estado:"En Oferta",imagen:"/imgElectronics/monitor.webp",categoria:2},
    {id:4,nombre:"Smartphone",precio:400,estado:"Disponible",imagen:"/imgElectronics/smartphone.webp",categoria:2},
    {id:5,nombre:"Audifonos",precio:90,estado:"Agotado",imagen:"/imgElectronics/audifonos.webp",categoria:2}
  ]
 
 
  obtenerDescuentoCategoria(categoriaId: number): number {
    const categoria = this.categorias.find(cat => cat.id === categoriaId);
    return categoria ? categoria.descuento : 0;
  }

 
  calcularPrecioConDescuento(producto: Producto): number {
    const descuento = this.obtenerDescuentoCategoria(producto.categoria);
    return producto.precio * (1 - descuento);
  }

  ngOnInit(){
    console.log("Componente inicializado");
  }
}
