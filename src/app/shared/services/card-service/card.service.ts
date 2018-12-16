import { Injectable } from '@angular/core';
import List from 'src/app/shared/models/list';
import Card from 'src/app/shared/models/card';
import { DataService } from '../data-service/data-service';
import { StringUtils } from '../../utils/StringUtils';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private dataServicee: DataService) { }

  add(cardTitle: string, list: List){
    if(!StringUtils.isEmpty(cardTitle)){
      let card = new Card();
      card.title = cardTitle;
      this.dataServicee.addNewCard(card, list);
    }
  }
}
