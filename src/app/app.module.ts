import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material import
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// component import
import { AppComponent } from './app.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { HeaderComponent } from './header/header.component';
import { LinksPageComponent } from './links-page/links-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    HeaderComponent,
    LinksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }