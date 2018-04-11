import {Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../../card.mod";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})

export class PreviewComponent implements OnInit {

  card: Card;

  onDelete() {
    console.log('click Delete - cardID:' + this.card.id);
  }

  public shouDelete(): boolean {
    return this.card.name == localStorage.getItem('loguser');
  }

	constructor(private titleService: Title,  private route: ActivatedRoute) {
    const id = route.snapshot.params['id'];

    //get data from localstorage
    let jsonFromLocalStorage: string =  localStorage.getItem('allcards');
    let currentCardsInLocalStorage: Card[] =  <Card[]>JSON.parse(jsonFromLocalStorage);

    //get card by id
    this.card = currentCardsInLocalStorage.find(c => c.id == id);

  	}

  ngOnInit(): void {
		this.titleService.setTitle('Preview');
	}
}
