import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private myCart:any[]=[];
  getCart(){
    return this.myCart;
  }
  addtoCart(product:any){
    this.myCart.push(product)
  }
}
