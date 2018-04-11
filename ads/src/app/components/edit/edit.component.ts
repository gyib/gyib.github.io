import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Title } from "@angular/platform-browser";
import { Card } from '../../card.mod';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	private id: number;

	cardTitle = '';
	cardDescription = '';

	@Output() addCard = new EventEmitter<Card>();

	constructor(private titleService: Title, private router: Router) {
  	}

  ngOnInit(): void {
		this.titleService.setTitle('Edit');
	}

	hide = true;


	required = new FormControl('', [Validators.required]);

	getErrorMessage() {
		return this.required.hasError('required') ? 'You must enter a value' : '';
	}

	onAdd() {
    if (this.cardDescription === '' || this.cardTitle === '') return;

    this.id = ++this.id;

    const card = new Card(
      localStorage.getItem('loguser'),
      moment().format('DD.MM.YYYY'),
      this.cardTitle,
      this.cardDescription,
      this.id
    );

    this.addCard.emit(card);

    this.cardDescription = '';
    this.cardTitle = '';

    this.router.navigate(['/', card.id]);
	}
}
