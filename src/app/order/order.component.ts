import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  myForm:FormGroup;
  constructor() { 
  
   }
  

  ngOnInit(): void {
  }

}
