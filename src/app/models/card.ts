import List from './list';

export default class Card {
  static count : number = 1;
  constructor() {
    Card.count++;  
  }
  id: number = Card.count ;
  list: List;
  title:string;
}