import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from './movie.type';

export interface ConfirmData {
 movies: Movie;
  dismissButton?: DismissButton;
}


interface DismissButton {
  text?: string | null;
  onClickHandler?: () => void;
}

@Component({
  selector: 'app-movie-modal-view',
  templateUrl: './movie-modal-view.component.html',
  styleUrls: ['./movie-modal-view.component.scss']
})
export class MovieModalViewComponent {
  movie!: Movie;
  constructor(public dialogRef: MatDialogRef<MovieModalViewComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmData){}

  ngOnInit(){
    this.movie = this.data.movies;
  }

  onCloseClick(): void{
    if(this.data.dismissButton?.onClickHandler){
      this.data.dismissButton.onClickHandler();
    }

    this.dialogRef.close(false);
  }
}
