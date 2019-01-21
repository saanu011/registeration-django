import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  onClick() {
    console.log('Hello');

  }

  constructor() { }

  ngOnInit() {
  }



}
