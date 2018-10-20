import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	movies: any;
	searchText: string;
	genres: any;
	filterGenres: string = '';
	filteredMovies = [];

	constructor(private movieSvc: MovieService) { 
		this.movieSvc = movieSvc;
	}

	ngOnInit() {
		this.movieSvc.getMovies().subscribe( (response)=> {
			this.movies = response;
			console.log(this.movies);
			this.copySource( this.movies );
		});
	}

	filterByGenres( event ){
		if( event ){
			this.filteredMovies = this.movieSvc.filterByGenres( this.movies, event );
		}
		else{
			this.copySource( this.movies );
		}
	}

	copySource(source) {
		this.filteredMovies = JSON.parse( JSON.stringify(source) );
	}
}
