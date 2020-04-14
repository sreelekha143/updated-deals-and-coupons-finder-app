import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
item:any
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
seemore(){
  this.router.navigate(['/item'])
}
}
