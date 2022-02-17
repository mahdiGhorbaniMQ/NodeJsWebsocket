import { Component } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { DataService } from './data.service';
const subject = webSocket("ws://localhost:8081");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'websocket-example';
  liveData$:any;

  constructor(private service: DataService) {
    this.service.connect();
  }
  ngOnInit(){
    this.service.messages$.subscribe(
      (data:any)=>{this.liveData$=data}
    )
  }
  send(){
    this.service.sendMessage('Hello');
  }
}
