import { Component, OnInit, Input } from '@angular/core';
import Card from 'src/app/models/card';
import {DragAndDropServiceService} from 'src/app/shared/services/drag-and-drop/drag-and-drop-service.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;
  constructor(public dragAndDropServiceService: DragAndDropServiceService) { }

  ngOnInit() {
  }
  

}
