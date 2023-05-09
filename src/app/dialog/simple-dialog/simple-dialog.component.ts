import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../dialog.component";

@Component({
  selector: 'sample-dialog',
  templateUrl: 'simple-dialog.component.html'
})
export class SimpleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
