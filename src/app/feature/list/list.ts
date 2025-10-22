import { Component } from '@angular/core';
import { NgStyle, NgClass,CommonModule} from '@angular/common';

interface Producto{
  id:number;
  nombre:string;
  precio:number;
  estado:"Disponible"|"Agotado"|"En Oferta"
  imagen:string;
}

@Component({
  selector: 'app-list',
  imports: [NgStyle, NgClass,CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  productos:Producto[]=[
    {id:0,nombre:"Televisión",precio:100,estado:"En Oferta",imagen:"/imgElectronics/tv.webp"},
    {id:1,nombre:"Lavadora",precio:200,estado:"Disponible",imagen:"/imgElectronics/lavadora.webp"},
    {id:2,nombre:"Plancha",precio:70,estado:"En Oferta",imagen:"/imgElectronics/plancha.webp"},
    {id:3,nombre:"Monitor",precio:150,estado:"En Oferta",imagen:"/imgElectronics/monitor.webp"},
    {id:4,nombre:"Smartphone",precio:400,estado:"Disponible",imagen:"/imgElectronics/smartphone.webp"},
    {id:5,nombre:"Audifonos",precio:90,estado:"Agotado",imagen:"/imgElectronics/audifonos.webp"}
  ]
  ngOnInit(){
    console.log("Componente inicializado");
  }
}
