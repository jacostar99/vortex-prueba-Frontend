import { Component, OnInit } from '@angular/core';
import { EstrenosService , Estreno } from 'src/app/services/estrenos.service';


@Component({
  selector: 'app-estreno',
  templateUrl: './estreno.component.html',
  styleUrls: ['./estreno.component.css']
})
export class EstrenoComponent implements OnInit {

  estrenos:Estreno[] = [];

  constructor(private estrenosService:EstrenosService) { 


  }

  ngOnInit(): void {
  this.estrenos = this.estrenosService.getEstrenos();
  }

}


