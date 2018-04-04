import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})

export class PreviewComponent implements OnInit {

	constructor(private titleService: Title) {
  	}

  ngOnInit(): void {
		this.titleService.setTitle('Preview');
	}
}
