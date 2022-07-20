import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroChildComponentComponent } from './hero-child-component/hero-child-component.component';
import { HeroParentComponentComponent } from './hero-parent-component/hero-parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponentComponent,
    HeroParentComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
