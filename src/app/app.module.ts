import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnketComponent } from './anket/anket.component';
import { AnketSorusuComponent } from './anket-sorusu/anket-sorusu.component';

@NgModule({
  declarations: [
    AppComponent,
    AnketComponent,
    AnketSorusuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
