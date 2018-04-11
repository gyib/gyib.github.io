import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Card } from '../../card.mod';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

	@Input() card: Card;

	@Output() deleteCard = new EventEmitter<Card>();

	onDelete() {
		this.deleteCard.emit(this.card);
	}
  public shouDelete(): boolean {
	  return this.card.name == localStorage.getItem('loguser');
  }
}
