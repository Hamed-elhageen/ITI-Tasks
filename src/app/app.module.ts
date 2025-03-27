import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { ParentcontainerComponent } from './task-two/day 5/parentcontainer/parentcontainer.component';
import { FormchildComponent } from './task-two/day 5/formchild/formchild.component';
import { ShowchildComponent } from './task-two/day 5/showchild/showchild.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './day 6/header/header.component';
import { LoginComponent } from './day 6/login/login.component';
import { RegisterComponent } from './day 6/register/register.component';
import { DetailsComponent } from './day 6/details/details.component';
import { NotfoundComponent } from './day 6/notfound/notfound.component';
import { ProductsComponent } from './day 6/products/products.component'; // Import FormsModule
import { RouterModule } from '@angular/router';
import { HomeComponent } from './day 6/home/home.component';
import { CartComponent } from './day 6/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Add this import



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    TaskTwoComponent,
    ParentcontainerComponent,
    FormchildComponent,
    ShowchildComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    NotfoundComponent,
    ProductsComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
