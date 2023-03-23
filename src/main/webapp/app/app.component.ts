import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean = true;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000); // Set a timeout for 3 seconds to simulate a loading time
  }
}
