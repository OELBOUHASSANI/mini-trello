import { Component, OnInit, Input } from '@angular/core';
import Card from 'src/app/shared/models/card';
import {DragAndDropService} from 'src/app/shared/services/drag-and-drop/drag-and-drop.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  card: Card;
  constructor(public dragAndDropService: DragAndDropService) { }
}
