import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TransactionsReportComponent } from './components/transactions-report/transactions-report.component';
import { RecentTransactionComponent } from './components/recent-transaction/recent-transaction.component';
import { ElementsComponent } from './components/elements/elements.component';
import { TopSellingComponent } from './components/top-selling/top-selling.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TransactionsReportComponent,
    RecentTransactionComponent,
    ElementsComponent,
    TopSellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
