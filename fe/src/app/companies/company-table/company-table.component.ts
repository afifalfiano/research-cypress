import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DetailDataComponent } from 'src/app/shared/detail-data/detail-data.component';
import { OverviewDetailComponent } from 'src/app/shared/overview-detail/overview-detail.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserTableItem } from 'src/app/users/user-table/user-table-datasource';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss']
})
export class CompanyTableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<UserTableItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['no', 'company_name', 'aksi'];
  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog) {}
  ngOnInit() {
    this.doGetData();
  }

  doGetData() {
    this.apiService.get('/api/company').subscribe((response: any) => {
      const data = response.map((item, index) => {
        item.no = index + 1;
        return item;
      });
      this.dataSource = data;
      console.log(data);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  onBtnViewDetail(data: any) {
    data.title = 'Detail Company';
    this.dialog.open(DetailDataComponent, {
      width: '500px',
      position: {
        top: '100px'
      },
      data
    });

  }

  onBtnClickAddNewUser() {
    // this.router.navigateByUrl(this.router.url + '/create');
  }

  onBtnUpdate(data: any) {
    console.log(data);
    // this.router.navigateByUrl(this.router.url + '/update/' + data.id, { state: { data } });
  }

  onDelete(id: number) {
    this.apiService.delete('/api/company/' + id).subscribe((response: any) => {
      console.log(response);
      this.doGetData();
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }
  onBtnDelete(data: any) {
    console.log(data);
    const dialogRef = this.dialog.open(OverviewDetailComponent, {
      width: '500px',
      position: {
        top: '100px'
      },
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.onDelete(result.id);
      }
    });
  }

}
