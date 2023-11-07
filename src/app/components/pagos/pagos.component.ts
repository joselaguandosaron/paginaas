import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/api.service';
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  ngOnInit(): void {
    this.obtener_pagos();
  }

  constructor(private rest:RestService){} 

  pagos=[
    
   // { nombre_cliente:'',
    //apellido_cliente:'',
   // nombre_empresa:'',
   // importe:'',
   // tipo_targeta:''}
   
  ];

  async obtener_pagos(){
  
    // obtengo todas los pagos
    const pago_lista = await this.rest.GetRequest("ObtenerPagos").toPromise();  

    // me va a devolver la lista que se llama pagos_completo
    this.pagos=pago_lista.pagos_completo;
    console.log(this.pagos[0][1]);

    
  }  

  async eliminar( id :any){
    //console.log("aca el id eliminar:",id);
    //const eliminado = await this.rest.DeleteRequest("eliminar/"+id).toPromise();  

  }
}
