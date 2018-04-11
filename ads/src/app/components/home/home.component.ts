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
    //get data from localstorage
    let jsonFromLocalStorage: string =  localStorage.getItem('allcards');
    let currentCardsInLocalStorage: Card[] =  <Card[]>JSON.parse(jsonFromLocalStorage);

    //remove card from array by id
    let cardsAfterDelete: Card[] = currentCardsInLocalStorage.filter(c => c.id !== card.id);

    //save back to localstorage
    let updatedJson = JSON.stringify(cardsAfterDelete);
    localStorage.setItem('allcards', updatedJson);
	}

  onAdd(user: User) {
    let myUsers = this.getRegistrUsers();
    // Check if user exists
    let foundUser = myUsers.find(u => u.name == user.name);
    if (foundUser == null) {
      this.registrNewUser(user);
      this.savesAsLoggedUser(user);
    }
    else {
      //Check pasword
      if (foundUser.password == user.password ) {
        this.savesAsLoggedUser(user);
      }
      else {
        alert('wrong password');
      }
    }
  }

  private savesAsLoggedUser(user: User) {
//Save as logged in
    localStorage.setItem('loguser', user.name);
  }

  private registrNewUser(user: User) {
    let myUsers = this.getRegistrUsers();

    // let newId:number = myUsers.length + 1;
    // user.id = newId;
    myUsers.push(user);
    let newJson: string = JSON.stringify(myUsers);
    localStorage.setItem('allusers', newJson);
  }

  private getRegistrUsers() {
    let json: string = localStorage.getItem('allusers');
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
}
