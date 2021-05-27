import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from '../peliculas/pelicula';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {

  peliculas:Pelicula[] = [];

  constructor(private peliculaService:PeliculasService) { }

  ngOnInit(): void {
    this.consultarTodas();
  }

  consultarTodas(): void {
    this.peliculaService.getPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    })
  }

}
