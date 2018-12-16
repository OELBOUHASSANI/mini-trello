import { TestBed } from '@angular/core/testing';
import { DataService } from '../data-service/data-service';
import { CardService } from './card.service';
import List from 'src/app/models/list';

describe('CardService', () => {
  let dataService: DataService;
  let addNewCardSpy;
  beforeEach( () => {
    dataService = new DataService();
    addNewCardSpy= spyOn(dataService,'addNewCard').and.callThrough();

});

  it('should be created', () => {
    const service: CardService = TestBed.get(CardService);
    expect(service).toBeTruthy();
  });

  it('should not call dataServiceService.addNewCard', () => {
    const service: CardService = TestBed.get(CardService);
     service.add('', new List()); 
     expect(addNewCardSpy).toHaveBeenCalledTimes(0);        
  });
  xit('should  call dataServiceService.addNewCard exactly one time', () => {
    let list = new List();
    list.id = 1;
    list.title = 'list 1';
    list.cards = []
    const service: CardService = TestBed.get(CardService);
     service.add('new card', list); 
     expect(addNewCardSpy).toHaveBeenCalledTimes(1);        
  });
});
