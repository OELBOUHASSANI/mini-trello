import { Injectable } from '@angular/core';
import { DataService } from '../data-service/data-service';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropServiceService {

  constructor(private dataService: DataService) { }
  drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    this.dataService.moveCardToList(Number(data),Number(ev.currentTarget.id.split('-')[1]));
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
}
