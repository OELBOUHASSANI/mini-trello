import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
   
  private dropSubject = new Subject<any>();

  constructor() { }

  getMessage(): Observable<any> {
    return this.dropSubject.asObservable();
}
  drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("id");
    this.dropSubject.next({cardId:Number(data), listId: Number(ev.currentTarget.id.split('-')[1])});
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
}
