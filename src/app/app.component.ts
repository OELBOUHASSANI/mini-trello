import { Component } from '@angular/core';
import { DataService } from './shared/services/data-service/data-service';
import { DragAndDropService } from './shared/services/drag-and-drop/drag-and-drop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini-trello';

  constructor(public dataService: DataService,
    private dragAndDropServiceService: DragAndDropService) {
      dragAndDropServiceService.getMessage()
      .subscribe(data => dataService.moveCardToList(data.cardId,data.listId));
   }

}
