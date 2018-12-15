import { Injectable } from '@angular/core';
import List from 'src/app/models/list';
import Card from 'src/app/models/card';
import { DataService } from '../data-service/data-service';
import { StringUtils } from '../../utils/StringUtils';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private dataServicee: DataService) { }

  addCard(cardTitle: string, list: List){
    if(!StringUtils.isEmpty(cardTitle)){
      let card = new Card();
      card.title = cardTitle;
      this.dataServicee.addNewCard(card, list);
    }
  }
}
