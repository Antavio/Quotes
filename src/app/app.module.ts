import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDatailsComponent } from './quote-datails/quote-datails.component';
import { DateRangePipe } from './date-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDatailsComponent,
    DateRangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
