import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-exercitiu-live',
  imports: [NgIf, MatTableModule],
  templateUrl: './exercitiu-live.component.html',
  styleUrl: './exercitiu-live.component.css'
})
export class ExercitiuLiveComponent {

  websocket_genuflexiuni : WebSocket | null = null;
  url_frame_prelucrat : string | null = null;
  date_extrase : any;
  afisare_tabel : boolean = false;
  coloane : string[] = ['adancime', 'deviatie_coborare', 'deviatie_urcare', 'dif_nivel_solduri_coborare', 'dif_nivel_solduri_urcare', 'dif_nivel_solduri_z_coborare', 'dif_nivel_solduri_z_urcare'];

  constructor(private http_client : HttpClient) {}
  
  primireRezultate()
  {
    this.http_client.get<any>('http://127.0.0.1:8000/date_extrase_genuflexiuni/').subscribe(
        (data) => 
        {
          console.log("Date despre genuflexiuni primite cu succes", data);
          this.date_extrase = data;
          this.afisare_tabel = true;
        }
      )
  }

  pornireFeedLive()
  {
    this.websocket_genuflexiuni = new WebSocket('ws://127.0.0.1:8000/video_feed_live/');

    this.websocket_genuflexiuni.onmessage = event =>
    {
       const blob = new Blob([event.data], { type: 'image/jpeg' });
       this.url_frame_prelucrat = URL.createObjectURL(blob);
    }

    this.websocket_genuflexiuni.onclose = () => 
      {
        this.url_frame_prelucrat = null;
        this.primireRezultate()
      }
  }

}
