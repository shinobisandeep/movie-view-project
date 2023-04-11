import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [ FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatCardModule],
  exports: [LoginComponent],
  providers: [AuthService]
})

export class LoginModule {}
