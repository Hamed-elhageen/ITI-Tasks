import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchproductsService {
private apiUrl ="https://dummyjson.com/products"
  constructor(private myhttp:HttpClient) { }
  getProducts():Observable<any>{
return this.myhttp.get<any>(this.apiUrl)
  }
}
