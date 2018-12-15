import { Component } from '@angular/core';
import { DataService } from './shared/services/data-service/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-trello';

  constructor(public dataService: DataService) {
      

   }

}
