import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { routingModule } from './app.routing';
import { MovieService } from './movie.service';
import { SearchPipe } from './search.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component'

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchPipe,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routingModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
