import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './day 6/products/products.component';
import { HomeComponent } from './day 6/home/home.component';
import { NotfoundComponent } from './day 6/notfound/notfound.component';
import { LoginComponent } from './day 6/login/login.component';
import { RegisterComponent } from './day 6/register/register.component';
import { CartComponent } from './day 6/cart/cart.component';
import { DetailsComponent } from './day 6/details/details.component';

const routes: Routes = [
  {path:"",redirectTo:"/home", pathMatch:"full"},
  { path: 'home', component: HomeComponent },
  {path:'home/login', component:LoginComponent},
  {
    path:"home/register" , component:RegisterComponent
  },
  {
    path:"home/cart",component:CartComponent
  },
  {
    path:"details/:pid", component:DetailsComponent
  },
  {path:"**", component:NotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
