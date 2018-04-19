import { Component, OnInit } from '@angular/core';
import { Card } from '../../card.mod';
import { User } from '../../user.mod';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardsPerPage = 5;
  pageNumber = 1;
  totalPages: number;

	constructor(private titleService: Title) {
  }

  ngOnInit(): void {
	  this.titleService.setTitle('Ads');
	}

	getCards(): Card[] {

    const json: string =  localStorage.getItem('allcards');
    let allMyCards: Card[] =  <Card[]>JSON.parse(json);

    if (allMyCards === null) {
      allMyCards = [];
    }

    const tp = Math.ceil(allMyCards.length / 5);
    if (this.pageNumber > tp) {
      this.pageNumber = tp;
    }

    const startPos = (this.pageNumber - 1) * this.cardsPerPage;
    const stopPos = startPos + this.cardsPerPage;

    const filteredCards = allMyCards.slice(startPos, stopPos);

		return filteredCards;
	}

	onDelete(card: Card) {
    //get data from localstorage
    const jsonFromLocalStorage: string =  localStorage.getItem('allcards');
    const currentCardsInLocalStorage: Card[] =  <Card[]>JSON.parse(jsonFromLocalStorage);

    //remove card from array by id
    const cardsAfterDelete: Card[] = currentCardsInLocalStorage.filter(c => c.id !== card.id);

    //save back to localstorage
    const updatedJson = JSON.stringify(cardsAfterDelete);
    localStorage.setItem('allcards', updatedJson);
	}

  onAdd(user: User) {
    const myUsers = this.getRegistrUsers();
    // Check if user exists
    const foundUser = myUsers.find(u => u.name == user.name);
    if (foundUser == null) {
      this.registrNewUser(user);
      this.savesAsLoggedUser(user);
    } else {
      //Check pasword
      if (foundUser.password == user.password ) {
        this.savesAsLoggedUser(user);
      } else {
        alert('wrong password');
      }
    }
  }

  private savesAsLoggedUser(user: User) {
//Save as logged in
    localStorage.setItem('loguser', user.name);
  }

  private registrNewUser(user: User) {
    const myUsers = this.getRegistrUsers();

    myUsers.push(user);
    const newJson: string = JSON.stringify(myUsers);
    localStorage.setItem('allusers', newJson);
  }

  private getRegistrUsers() {
    const json: string = localStorage.getItem('allusers');
    let myUsers: User[] = <User[]>JSON.parse(json);

    if (myUsers === null) {
      myUsers = [];
    }
    return myUsers;
  }

  public needToShowLogIn(): boolean {
    if (localStorage.getItem('loguser') === null) {
      return true;
    } else {
      return false;
    }
  }

  public needToShowCreate(): boolean {
    if (localStorage.getItem('loguser') === null) {
      return false;
    } else {
      return true;
    }
  }

  public setPage(pn: number): void {
	  this.pageNumber = pn;
  }

  public countPages(): number[] {

    const json: string =  localStorage.getItem('allcards');
    const allMyCards: Card[] =  <Card[]>JSON.parse(json);

    this.totalPages = Math.ceil(allMyCards.length / this.cardsPerPage);

    const pages = [];

    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  public showPagination(): boolean {

    const json: string =  localStorage.getItem('allcards');
    const allMyCards: Card[] =  <Card[]>JSON.parse(json);

    if (allMyCards === null) {
        return false;
      } else {
        if (allMyCards.length > 5) {
          return true;
        } else {
          return false;
        }
      }

  }
}
