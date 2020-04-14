import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/viewmodels/item.viewmodel';
import { ItemService } from 'src/app/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
item:Item[];

  constructor(private itemService:ItemService,private router:Router,) { }

  ngOnInit(): void {
  }
  // getItemsFromService(){
  //   this.itemService.getItems().subscribe((response)=>{
  //     this.item=response;
  //     console.log(this.item);
  
  //   });
  // }
}
