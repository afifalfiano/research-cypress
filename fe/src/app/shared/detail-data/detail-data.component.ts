import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detail-data',
  templateUrl: './detail-data.component.html',
  styleUrls: ['./detail-data.component.scss']
})
export class DetailDataComponent implements OnInit {
  title = 'User';
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    console.log(this.data);
    if (this.data.title === 'Detail User') {
      this.title = 'Detail User';
    } else if (this.data.title === 'Detail Company') {
      this.title = 'Detail Company';
    }
  }

}
