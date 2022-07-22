import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroChildComponentComponent } from './hero-child-component/hero-child-component.component';
import { HeroParentComponentComponent } from './hero-parent-component/hero-parent-component.component';
import { NameChildComponent } from './name-child/name-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponentComponent,
    HeroParentComponentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
