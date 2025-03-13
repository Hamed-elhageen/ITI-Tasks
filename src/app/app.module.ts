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
import { FormsModule } from '@angular/forms'; // Import FormsModule


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
    ShowchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
