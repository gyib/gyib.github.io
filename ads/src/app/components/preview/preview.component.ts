import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Card} from '../../card.mod';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})

export class PreviewComponent implements OnInit {

  @Input() card: Card;

  @Output() deleteCard = new EventEmitter<Card>();

  onDelete() {
    //get data from localstorage
    const jsonFromLocalStorage: string =  localStorage.getItem('allcards');
    const currentCardsInLocalStorage: Card[] =  <Card[]>JSON.parse(jsonFromLocalStorage);

    //remove card from array by id
    const cardsAfterDelete: Card[] = currentCardsInLocalStorage.filter(c => c.id !== this.card.id);

    //save back to localstorage
    const updatedJson = JSON.stringify(cardsAfterDelete);
    localStorage.setItem('allcards', updatedJson);
  }

  public shouDelete(): boolean {
    return this.card.name == localStorage.getItem('loguser');
  }

	constructor(private titleService: Title,  private route: ActivatedRoute) {
    const id = route.snapshot.params['id'];

    //get data from localstorage
    const jsonFromLocalStorage: string =  localStorage.getItem('allcards');
    const currentCardsInLocalStorage: Card[] =  <Card[]>JSON.parse(jsonFromLocalStorage);

    //get card by id
    this.card = currentCardsInLocalStorage.find(c => c.id == id);

  	}

  ngOnInit(): void {
		this.titleService.setTitle('Preview');
	}
}
