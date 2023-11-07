import { Component ,OnInit} from '@angular/core';
import { RestService } from 'src/app/api.service';

import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})

export class HomeComponent implements OnInit{
  constructor(private rest:RestService){} 
  ngOnInit(): void {
     this.obtener_empresas();
  }
  
  datos={
    nombre:'',
    apellido:'',
    empresa_elegida:'',
    importe:'',
    tipo_tarjeta:''
  }

  empresas=[
    
   { nombre:'jose'}
  
  ];

  
   
   
  

  async agregar(){
      // agrego clientes
      console.log('d: ',this.datos);
      const restito = await this.rest.PostRequest("agregarCliente",this.datos).toPromise();

      // resetear inputs 
      this.datos.nombre='';
      this.datos.apellido='';
      this.datos.empresa_elegida='';
      this.datos.importe='';
      this.datos.tipo_tarjeta='';
      console.log("funciono");
  }

  async obtener_empresas(){
  
    // obtengo todas las empresas
    const empresas_lista = await this.rest.GetRequest("ObtenerEmpresas").toPromise();  

    // me va a devolver la lista que se llama empresas
    this.empresas=empresas_lista.empresas;
    console.log(this.empresas);

    
  }  
}
