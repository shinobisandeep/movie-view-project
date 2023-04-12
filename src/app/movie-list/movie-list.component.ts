import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieService } from './movies.service';
import { MovieModalViewComponent } from '../components/movie-modal/movie-modal-view/movie-modal-view.component';
import { MovieDetails, MoviesListResponse } from './movie-list.response';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { MovieModalService } from '../components/movie-modal/movie-modal-view/movie-modal-view.service';
import { Movie } from '../components/movie-modal/movie-modal-view/movie.type';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  searchInput: FormControl = new FormControl('');
  movies!: MoviesListResponse;
  moviesDetails!: MovieDetails[];
  isLoading = false;
  isError = false;
  subscription!: Subscription;
  imageName: string[] = [];
  avatar!: string ;

  constructor(private movieService: MovieService, private dialog: MatDialog, private movieModel: MovieModalService) {}

  ngOnInit() {
    this.fetchMovies();
    this.subscription = this.searchInput.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => {
       if(this.searchInput.value.length >2){
       this.searchMovies(value);
       }

      });
  }

  searchMovies(query: string): void {

     this.movieService.getMovies().subscribe(
     (response) => {
      this.moviesDetails =response.results.filter((result: MovieDetails) => result.title.toLowerCase().includes(query.toLowerCase()));
        }
      );
  }

splitStringsToArray(genres: string): string[]{
  return genres.split(',');
}

fetchImages(): void{
  this.isLoading = true;
  this.moviesDetails.forEach(movie => {
    this.movieService.getImages(movie.title.replace(/\s+/g, '')).subscribe((value)=>{
      this.avatar = value;
      this.isLoading = false;
    });
  })
}

  fetchMovies(): void {
    this.isLoading = true;
    this.movieService.getMovies().subscribe(
      (response:MoviesListResponse) => {
        this.movies = response;
        this.moviesDetails =response.results;
        this.fetchImages();
        this.imageName = this.moviesDetails.map(value => {
          return value.title;
        });
        this.isLoading = false;
      }
    );
  }

  refreshMovies() {
    this.fetchMovies();
  }

  openMovieModal(movie: Movie) {
    this.movieModel.show({
      movies: {
      title: movie.title,
      description: movie.description,
      genres: movie.genres
    }, });
  }

}
