import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { EstrenosService } from 'src/app/services/estrenos.service';

@Component({
  selector: 'app-info-estreno',
  templateUrl: './info-estreno.component.html',
  styleUrls: ['./info-estreno.component.css']
})
export class InfoEstrenoComponent implements OnInit {
  
  infoEstreno:any = {};    

    


  constructor(private activatedRouter:ActivatedRoute , private estrenoService:EstrenosService  ) { 
  
    this.activatedRouter.params.subscribe( params =>{
      this.infoEstreno = this.estrenoService.getInfoEstreno(params['id']);
        
    })

    

  }

  ngOnInit(): void {
  }

}
