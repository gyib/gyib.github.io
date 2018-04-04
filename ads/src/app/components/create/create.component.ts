import { Component } from '@angular/core';
import { Card, Cards } from '../../card.mod';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  onAdd(card: Card) {

		let json:string =  localStorage.getItem('allcards');
		let myCards : Card[] =  <Card[]>JSON.parse(json);

		if (myCards === null) {
		  myCards = [];
		}

    let newId:number = myCards.length + 1;
    card.id = newId;
    myCards.push(card);
    let newJson:string = JSON.stringify(myCards);
    localStorage.setItem('allcards', newJson);
  }

}
