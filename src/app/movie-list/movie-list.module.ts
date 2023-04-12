import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieListComponent } from './movie-list.component';
import { MovieModalViewComponent } from '../components/movie-modal/movie-modal-view/movie-modal-view.component';
import { MovieService } from './movies.service';
import { SharedComponentModule } from '../components/shared-component.module';
import { SnackBarService } from '../components/app-snackbar/snackbar/snackbar.service';

@NgModule({
      declarations: [MovieListComponent],
  imports: [ FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    SharedComponentModule,
    MatTooltipModule
  ],
  exports: [MovieListComponent],
  providers: [MovieService, SnackBarService]
})

export class MovieListModule {}
