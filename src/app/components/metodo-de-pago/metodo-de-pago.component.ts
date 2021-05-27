import { Component, OnInit } from '@angular/core';
import { MetodosDePagoService } from 'src/app/services/metodos-de-pago.service';
import swal from 'sweetalert2';
import { MetodoDePago } from './metodo-de-pago';

@Component({
  selector: 'app-metodo-de-pago',
  templateUrl: './metodo-de-pago.component.html',
  styleUrls: ['./metodo-de-pago.component.css']
})
export class MetodoDePagoComponent implements OnInit {

  metodosDePago:MetodoDePago [] = [];

  constructor(private metodoDePagoService:MetodosDePagoService) { }

  ngOnInit(): void {
    this.consultarTodoss();
  }

  consultarTodoss(): void {
    this.metodoDePagoService.getMetodosDePago().subscribe((metodosDePago) => {
      this.metodosDePago = metodosDePago;
    })
  }

  //aqui va el delete por que aqui esta la lista de los usuarios
  eliminar(metodosDePago: MetodoDePago): void {
    swal({
      title: '¿Estas seguro?',
      text: `¿Seguro que desea eliminar el metodo de pago ${metodosDePago.nombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.metodoDePagoService.eliminar(metodosDePago.pagoId).subscribe(
          response => {
           this.metodosDePago = this.metodosDePago.filter(use => use !== metodosDePago)
            swal(
              'Metodo de pago eliminado!',
              `Metodo de pago ${metodosDePago.nombre} eliminado con exito.`


            )
          }
        )
      }
    }

    )

  }


}
