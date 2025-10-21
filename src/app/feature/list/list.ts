import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

interface Producto{
  id:number;
  nombre:string;
  precio:number;
  agotado:boolean
}

@Component({
  selector: 'app-list',
  imports: [NgStyle, NgClass],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  productos:Producto[]=[
    {id:0,nombre:"Televisión",precio:100,agotado:true},
    {id:1,nombre:"Lavadora",precio:200,agotado:true},
    {id:2,nombre:"Plancha",precio:70,agotado:false},
    {id:3,nombre:"Monitor",precio:120,agotado:false},
    {id:4,nombre:"Smartphone",precio:400,agotado:false},
    {id:5,nombre:"Audifonos",precio:90,agotado:true}
  ]
  ngOnInit(){
    console.log("Componente inicializado");
  }
}
