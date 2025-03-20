import { Component, OnInit } from '@angular/core';
import { CartserviceService } from './../services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems:any[]=[]
constructor(private myService:CartserviceService){
}
  ngOnInit(): void {
    this.cartItems=this.myService.getCart();
  }

}
