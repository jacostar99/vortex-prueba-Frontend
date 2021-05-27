import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { MetodosDePagoService } from 'src/app/services/metodos-de-pago.service';
import swal from 'sweetalert2';
import { MetodoDePago } from './metodo-de-pago';

@Component({
  selector: 'app-form-metodo',
  templateUrl: './form-metodo.component.html',
  styleUrls: ['./form-metodo.component.css']
})
export class FormMetodoComponent implements OnInit {

  metodoDePago:MetodoDePago = new MetodoDePago(0,"","");

  constructor(private metodoDePagoService: MetodosDePagoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authFirebaseService: AuthFirebaseService) { }

  ngOnInit(): void {
    this.cargarMetodoDePago();
  }

  crear(): void {
    this.metodoDePagoService.crear(this.metodoDePago).subscribe(
      metodoDePago => {
        swal('Metodo de pago creado', `Metodo de pago ${metodoDePago.nombre} creado con exito`, 'success')
        this.router.navigate(['/metodos-de-pago'])
      }

    )
  }



  cargarMetodoDePago(): void {
    this.activatedRoute.params.subscribe(params => {
      let pagoId = params['pagoId']
      if (pagoId) {
        this.metodoDePagoService.obtenerMetodoDePago(pagoId).subscribe((metodoDePago) => {
          this.metodoDePago = metodoDePago
        })

      }
    })
  }

  actualizar(): void {
    this.metodoDePagoService.actualizar(this.metodoDePago).subscribe(
      metodoDePago => {
        swal('Metodo de pago actualizado', `Metodo de pago ${metodoDePago.nombre} actualizado con exito`, 'success')
        this.router.navigate(['/metodos-de-pago'])
      }
    )

  }

}
