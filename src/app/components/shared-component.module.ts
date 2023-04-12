import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { SnackBarService } from './app-snackbar/snackbar/snackbar.service';
import { MovieModalViewComponent } from './movie-modal/movie-modal-view/movie-modal-view.component';
import { SnackbarComponent } from './app-snackbar/snackbar/snackbar.component';
import { CommonModule } from '@angular/common';
import { SpinnerLoadComponent } from './spinner/spinner-load/spinner-load.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MovieModalViewComponent,SnackbarComponent, SpinnerLoadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  providers: [SnackBarService],
  exports: [MovieModalViewComponent,SnackbarComponent,SpinnerLoadComponent]
})
export class SharedComponentModule { }
