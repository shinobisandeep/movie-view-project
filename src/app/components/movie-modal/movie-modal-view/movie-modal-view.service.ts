import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { ConfirmData, MovieModalViewComponent } from "./movie-modal-view.component";

@Injectable()
export class MovieModalService {
  constructor(private dialog: MatDialog) {}

  public show(data: ConfirmData): Observable<boolean> {
    let dialogData: ConfirmData = {
      movies: {
        title: data.movies.title,
        description: data.movies.description,
        genres: data.movies.genres
      },
      dismissButton: {
        text: data.dismissButton?.text || null,
        onClickHandler: data?.dismissButton?.onClickHandler,
      },
    };

    let dialogRef: MatDialogRef<MovieModalViewComponent>;
    dialogRef = this.dialog.open(MovieModalViewComponent, {
      panelClass: 'dialog',
      width: '420px',
      disableClose: true,
      data: dialogData,
    });
    return dialogRef.afterClosed();
  }
}
