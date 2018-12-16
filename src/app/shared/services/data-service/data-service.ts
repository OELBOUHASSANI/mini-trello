import { Injectable } from '@angular/core';
import List from 'src/app/shared/models/list';
import Card from 'src/app/shared/models/card';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  private  cardsValue: Card [] = []
  private listsValue: List [] = [
    {id:1, cards : [], title:'Blocked'},
    {id:2, cards : [], title:'To DO'},
    {id:3, cards : [], title:'In Irogress'},
    {id:4, cards : [], title:'Done'}
  ];

  
  get lists (): List []{
    return  this.listsValue;
  }

  addNewCard (card: Card, list: List){
    this.cardsValue.push(card);
    this.addCardToList(card, list);
  }

  addCardToList(card: Card, list:List){
    card.list = list;
    list.cards.push(card);
  }
  
  moveCardToList(cardId:number, listId: number){
   let card = this.cardsValue.find(c=>c.id === cardId);
   let currentList = this.listsValue.find(l=> l.id===card.list.id);
   // remove card from list
   currentList.cards = currentList.cards.filter(c => c.id!==cardId);
   let list = this.listsValue.find(l=> l.id===listId);
   this.addCardToList(card, list);
   
  }

  removeCard (card: Card){
    this.cardsValue = this.cardsValue.filter(c => c.id !== card.id);
  }
  

  addList (list: List){
    this.listsValue.push(list);
  }
  removeList(list: List){
    this.listsValue = this.listsValue.filter(l => l.id !== list.id);
  }
  constructor() { }
}
