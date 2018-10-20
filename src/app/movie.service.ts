import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

@Injectable()
export class MovieService {

  constructor(private http: Http) { 
  	 this.http = http;
  }

  getMovies() {
  	return this.http.get('app/movie.mock-data.json')
        .map((response) => {
           return response.json();
        })
        .share();
  }

  getMovieDetails( id : number ) {
  	return this.http.get('app/movie.mock-data.json')
        .map((response) => {
           const movies = response.json();
           const movieDetails = movies.filter( (movie) => {
           		if (movie.id === id){
           			return movie;
           		}
           });
           return movieDetails;
        })
        .share();
  }

  filterByGenres( movies, genre ){

  	return movies.filter( ( movie ) => {
  		return (movie.genres.indexOf(genre)>-1 );
  	});

  }

}
