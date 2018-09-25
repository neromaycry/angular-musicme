import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-musicme';

  ngAfterViewInit() {
    // this.getScreenInfo();
  }

  getScreenInfo() {
    alert(document.body.clientHeight);
  }

}
