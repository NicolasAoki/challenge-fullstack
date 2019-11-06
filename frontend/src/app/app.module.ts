import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MapaComponent } from './mapa/mapa.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoCodingService } from '../services/geocoding.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    MapaComponent,
  ],
  imports: [
    BrowserModule,
    LeafletModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [ GeoCodingService]
})
export class AppModule { }
