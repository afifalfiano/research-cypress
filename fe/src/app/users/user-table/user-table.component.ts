import { DataSource } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DetailDataComponent } from 'src/app/shared/detail-data/detail-data.component';
import { OverviewDetailComponent } from 'src/app/shared/overview-detail/overview-detail.component';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserTableDataSource, UserTableItem } from './user-table-datasource';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<UserTableItem>;
  dataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['no', 'fullname', 'photo', 'email', 'phone', 'city', 'country', 'company', 'aksi'];
  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog, private toastrService: ToastrService) {}
  ngOnInit() {
    this.doGetData();
  }

  doGetData() {
    this.apiService.get('/api/users').subscribe((response: any) => {
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

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
  }

  onBtnViewDetail(data: any) {
    data.title = 'Detail User';
    this.dialog.open(DetailDataComponent, {
      width: '500px',
      position: {
        top: '100px'
      },
      data
    });

  }

  onBtnClickAddNewUser() {
    this.router.navigateByUrl(this.router.url + '/create');
  }

  onBtnUpdate(data: any) {
    console.log(data);
    this.router.navigateByUrl(this.router.url + '/update/' + data.id, { state: { data } });
  }

  onDelete(id: number) {
    this.apiService.delete('/api/users/' + id).subscribe((response: any) => {
      console.log(response);
      this.toastrService.success('Success Delete');
      this.doGetData();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastrService.error('Error Delete');
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
