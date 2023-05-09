import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SimpleDialogComponent } from "./simple-dialog/simple-dialog.component";

export interface DialogData {
  surname: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  surname!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      data: {name: this.name, surname: this.surname},
      height: '400px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Диалог был закрыт...', result);
      if(result) this.name = result.name; else this.name = '';
      if(result) this.surname = result.surname; else this.surname = '';
    });
  }
}
