import { Component, OnInit, Input } from '@angular/core';
import {DragAndDropServiceService} from 'src/app/shared/services/drag-and-drop/drag-and-drop-service.service'
import List from 'src/app/models/list';
import { CardService } from 'src/app/shared/services/card-service/card.service';
import { StringUtils } from 'src/app/shared/utils/StringUtils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  addingCard = false;
  cartTitle = "";
  @Input() list: List;

  constructor(public dragAndDropServiceService: DragAndDropServiceService,
    private cardService: CardService) { }
  
  allowAddCard () {
    this.addingCard = true;
  }

  addCard () {
    if(!StringUtils.isEmpty(this.cartTitle)) {
      this.cardService.addCard(this.cartTitle, this.list);
      this.cartTitle = ''
    }
    this.addingCard = false;
  }
  ngOnInit() {
  }
 
}
