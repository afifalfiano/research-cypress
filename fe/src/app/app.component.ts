import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title;
  baseUrl;
  constructor(private httpService: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const headers  = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpService.get(this.baseUrl + '/api/hello', {headers}).subscribe(res => {
      console.log(res);
    });
  }
}
