import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FE';
  baseUrl;
  imageUrl;
  constructor(private httpService: HttpClient, private toastrService: ToastrService) {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit() {
    this.getData();
    // this.imageUrl = this.baseUrl + '/api/users/2/profile?filename=5.png';
  }

  getData() {
    // const headers  = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    // const param = {
    //   filename: '5.png'
    // };
    // return this.httpService.get(this.baseUrl + '/api/users/2/profile',  {headers, params: param}).subscribe(res => {
    //   console.log(res);
    //   // this.imageUrl = res;
    // });
  }
}
