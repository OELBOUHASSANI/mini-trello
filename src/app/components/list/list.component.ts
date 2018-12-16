import { Component, OnInit, Input } from '@angular/core';
import {DragAndDropService} from 'src/app/shared/services/drag-and-drop/drag-and-drop.service'
import List from 'src/app/models/list';
import { CardService } from 'src/app/shared/services/card-service/card.service';
import { StringUtils } from 'src/app/shared/utils/StringUtils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  addingCard = false;
  cardTitle = "";
  @Input() list: List;

  constructor(public dragAndDropService: DragAndDropService,
    private cardService: CardService) { }
  
  allowAddCard () {
    this.addingCard = true;
  }

  addCard () {
    if(!!this.cardTitle) {
      this.cardService.add(this.cardTitle, this.list);
      this.cardTitle = ''
    }
    this.addingCard = false;
  }
 
}
