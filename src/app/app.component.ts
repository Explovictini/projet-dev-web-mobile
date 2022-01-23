import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projet';

  alreadyLoaded: boolean = false;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.importData();
  }

}
