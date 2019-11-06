import { Component, OnInit } from '@angular/core';
import { Deliveries } from '../../models/deliveries'
import { GeoCodingService } from '../../services/geocoding.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  submitted = false;

  public deliveries: Deliveries;

  public dados = {
    nome: '',
    peso: '',
    endereco: '',
    latitude: '',
    longitude: ''
  }

  constructor(public geoCodingService: GeoCodingService) { }

  ngOnInit() {
  }

  requestAddressGoogle(form) {
    // Verifica se o formulário é válido
    if (!form.valid)
      return;
  }
  async getLocation(){
    await this.geoCodingService.getGeolocation(this.dados.endereco).forEach((res)=>{
      console.log(res['results'][0])
      this.dados.latitude = res['results'][0].geometry.location.lat;
      this.dados.longitude = res['results'][0].geometry.location.lng;
      // this.deliveries.endereco.
    })
  }
}
