import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen-Practico-GPTX';

  public nuevo: boolean = false;
  public items: string[] = ["Centro", "Consulado", "Juventud"];
  public categorias: string[] = ["Hamburgesas", "Burritos", "Bebidas"];
  public productos: any[] = [
    {
      nombre: "Hamburgesa",
      precio: 32.40,
      promocion: false,
      tiene_imagen: true
    },
    {
      nombre: "Hot Dogs",
      precio: 45.20,
      promocion: false,
      tiene_imagen: false
    },
    {
      nombre: "Torta de pierna",
      precio: 10.23,
      promocion: false,
      tiene_imagen: true
    },
    {
      nombre: "Burrito de sebrada XD",
      precio: 40,
      promocion: false,
      tiene_imagen: true
    },
  ]


  public files: File[] = [];

  public sucursalS = null;

  constructor() {
  }

  ngOnInit(): void {
  }
}
