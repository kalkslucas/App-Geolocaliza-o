import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appGeo';

  map_url = ''
  latitude = 0
  longitude = 0

  latitude2 = 0
  longitude2 = 0

  ngOnInit(){
    this.verifica_local()
  }

  verifica_local(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.latitude = pos.coords.latitude
          this.longitude = pos.coords.longitude
          this.map_url = 'https://www.google.com/maps/search/?api=1&query='+this.latitude+','+this.longitude
        },
        () => {
          alert('Sem localização!')
        },
        { timeout: 15000 }
      )
    }

    
  }
}
