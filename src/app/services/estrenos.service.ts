import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstrenosService {

  private estrenos: Estreno[] = [
    {
      nombrePelicula: "Dune",
      img: "assets/img/dune.jpeg",
      informacion: "Dune, el viaje de un héroe mítico que soporta una enorme carga emocional, cuenta la historia de Paul Atreides, un joven brillante que ha nacido con un destino más grande que él mismo. En esta epopeya, deberá viajar al planeta más peligroso del universo para asegurar el futuro de su familia y de su gente. Las fuerzas del mal se enfrentan para hacerse con uno de los recursos más excepcionales del planeta, que tiene el poder de desbloquear todo el potencial de la humanidad. Solo los que logren dominar sus miedos podrán sobrevivir.",
      fechaEstreno : "1 de Octubre de 2021"
    },
    {
      nombrePelicula: "El conjuro 3",
      img: "assets/img/conjuro.jpg",
      informacion: "Esta entrega revela una escalofriante historia de terror, asesinato y maldad desconocida que conmocionó incluso a los investigadores paranormales experimentados de la vida real, Ed y Lorraine Warren. Uno de los casos más sensacionales de sus archivos, comienza con una lucha por el alma de un niño, luego los lleva más allá de cualquier cosa que hayan visto antes, para marcar la primera vez en la historia de los Estados Unidos que un sospechoso de asesinato reclamaría posesión demoníaca como defensa.",
      fechaEstreno : "3 de Junio de 2021"    
    },
    {
      nombrePelicula: "Space Jam: Una nueva era",
      img: "assets/img/space.jpg",
      informacion: "La superestrella de la NBA, LeBron James, se une a Bugs Bunny y al resto de los Looney Tunes en esta esperada secuela.",
      fechaEstreno : "15 de julio de 2021"
    },
    {
      nombrePelicula: "Duro de cuidar 2",
      img: "assets/img/durod.png",
      informacion: "Secuela de 'El otro guardaespaldas' (Patrick Hughes, 2017). Michael Bryce (Ryan Reynolds) intenta llevar una vida pacífica, pero no puede evitar unirse a Darius (Samuel L. Jackson) y su esposa Sonia (Salma Hayek) en una misión a lo largo de la costa de Amalfi",
      fechaEstreno : "17 de Junio de 2021"
     },
    {
      nombrePelicula: "Muerte en el nilo",
      img: "assets/img/nilo.jpg",
      informacion: "Cuenta la aventura egipcia de Hércules Poirot, quien se ocupa de la aterradora búsqueda de un asesino luego de que una luna de miel idílica se ve arruinada por una serie de muertes violentas a bordo de un glamoroso barco de vapor. El relato siniestro de un amor obsesivo y sus consecuencias fatales se desarrolla en una atmósfera épica de peligro y premoniciones, con los suficientes giros malvados como para dejar al público inquieto y desconcertado hasta el impactante desenlace.",
      fechaEstreno : "11 de febrero de 2022"
    },
    {
      nombrePelicula: "Scream 5",
      img: "assets/img/scream5.jpg",
      informacion: "Nacida como una sátira de otros slashers como Halloween (1978) o Friday the 13th (1980), Scream se ha convertido en una de las franquicias de terror más populares y rentables de la historia. La película seguirá la historia de una joven mujer que regresa a su antiguo hogar, allí encontrará una serie de horripilantes asesinatos conectados a un popular asesino en serie.",
      fechaEstreno : "14 de enero de 2022"
    },
    {
      nombrePelicula: "The batman",
      img: "assets/img/batman.jpg",
      informacion: "En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como el Acertijo.",
      fechaEstreno : "4 de marzo de 2022"
    },
    {
      nombrePelicula: "Sin tiempo para morir",
      img: "assets/img/007.jpg",
      informacion: "Bea, Thomas y los conejos han creado una familia improvisada, pero a pesar de sus mejores esfuerzos, Peter no puede dejar atrás su reputación traviesa. Aventurándose fuera del jardín, Peter encuentra un mundo donde su travesura es apreciada, pero cuando su familia arriesga todo para ir a buscarlo, Peter deberá descubrir qué tipo de conejo quiere ser.",
      fechaEstreno : "30 de septiembre de 2021"
    }
  ]

  constructor() { }

  public getEstrenos():Estreno[] {
    return this.estrenos;
  }

  getInfoEstreno(idx:number){
    return this.estrenos[idx];
  }
}

export interface Estreno {

  nombrePelicula: string,
  img: string,
  informacion: string
  fechaEstreno: string

};
