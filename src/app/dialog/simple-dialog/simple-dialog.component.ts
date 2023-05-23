import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../dialog.component";

@Component({
  selector: 'sample-dialog',
  templateUrl: 'simple-dialog.component.html'
})
export class SimpleDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit(): void {
    console.log('data: ', this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
