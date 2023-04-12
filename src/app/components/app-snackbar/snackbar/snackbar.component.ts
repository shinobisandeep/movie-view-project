import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
export interface CustomSnackbarType {
  type: string;
  message: string;
  actionText: string;
}

@Injectable({
  providedIn: 'root',
})
@Component({
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit{
  typeClass!: string;
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: CustomSnackbarType,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.typeClass = this.data.type;
  }

  close(): void {
    this.snackbar.dismiss();
  }
}
