import { Component, OnInit } from '@angular/core';
import { Card } from '../../card.mod';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: Card[] = [];

	constructor(private titleService: Title) {
  }

  ngOnInit(): void {
		this.titleService.setTitle('Ads');
	}

	getCards(): Card[] {
		const json: string =  localStorage.getItem('allcards');
    const myCards: Card[] =  <Card[]>JSON.parse(json);
		return myCards;
	}

	onDelete(card: Card) {
		this.cards = this.cards.filter(c => c.id !== card.id);
		// localStorage.removeItem(key);
		// localStorage.clear();
		console.log('click delete. ID: ' + card.id);
    // console.log('click delete2. ID: ' + myCards);
    // for (let i = 0; i < localStorage.length; i++){
    //   let key = localStorage.key(i);
    //   let value = localStorage.getItem(key);
    //   console.log(key, value);
    // }
		// let foo_object // Item to remove
		// this.foo_objects = this.foo_objects.filter(obj => obj !== foo_object);
	}
}
