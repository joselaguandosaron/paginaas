import { Component } from '@angular/core';
import { eService } from '../dolar-servicio.service';
@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent {
  dolarP:number=0;

  constructor(private Eser: eService){}

  ngOnInit(): void {
    this.Eser.preciodolar()
      .subscribe((data: any) => {
        this.dolarP = 1 / data.rates.USD;
        console.log(this.dolarP)
      });
  }

}
