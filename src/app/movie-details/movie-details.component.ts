import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../movie.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

	movieId: number;
	movieDetails: any;
	toggle: boolean=false;

	constructor(private route: ActivatedRoute,
				private movieSvc: MovieService) {
		this.movieSvc = movieSvc;
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
		   this.movieId = +params['id'];
		});
		this.movieSvc.getMovieDetails( this.movieId ).subscribe( (response)=> {
			this.movieDetails = response[0];
		})
	}

}
