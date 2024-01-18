import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LSelectComponent } from './l-select/l-select.component';
import { FormsModule } from '@angular/forms';
import { SwitchComponent } from './switch/switch.component';
import { RatingInputComponent } from './rating-input/rating-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LSelectComponent,
    SwitchComponent,
    RatingInputComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
