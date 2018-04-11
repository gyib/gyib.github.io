import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public getName(): string {
    return localStorage.getItem('loguser');
  }

  logOut() {
    localStorage.removeItem('loguser');
  }

  public needToShowLogOut(): boolean {
    // const want = this.getName() !== null;
    // return want;

    if (this.getName() != null) {
      return true;
    } else {
      return false;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
