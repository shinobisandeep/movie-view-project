import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { LoginModule } from './login/login.module';
import { SnackBarService } from './components/app-snackbar/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
