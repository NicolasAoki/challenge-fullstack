export class Deliveries {
  public nome: string
  public peso: string
  public endereco: {
    logradouro: string,
    numero: string,
    bairro: string,
    complemento: string,
    cidade: string,
    estado: string,
    pais: string,
    geolocalizacao:{
      latitude: string
      longitude: string
    }
  }
}