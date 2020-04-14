import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/viewmodels/item.viewmodel';
import { ItemService } from 'src/app/item.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-itemget',
  templateUrl: './itemget.component.html',
  styleUrls: ['./itemget.component.css']
})
export class ItemgetComponent implements OnInit {
  item:Item[];

  
  constructor(private itemService:ItemService,private router:Router,private cartservice:CartService,private toastrservice:ToastrService) { 

   
  
  }
 
  getItemsFromService(){
    this.itemService.getItems().subscribe((response)=>{
      this.item=response;
      console.log(this.item);
    })
  }
  ngOnInit(): void {
    this.getItemsFromService();
  }
  addcart(selecteditem){
 
  this.cartservice.addToCart(selecteditem).subscribe((response)=>{
    console.log("value:",response);
    this.router.navigate(['/cart']) ;
   this.showSuccess()
  })
  }
  showSuccess() {
    this.toastrservice.success('successfully item added to cart');
  }
}
