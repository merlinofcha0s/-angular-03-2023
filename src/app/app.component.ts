import {Component, OnInit} from '@angular/core';
import {Vinyl} from "./vinyl/vinyl.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vinyl-mgt-front';


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.router.events.subscribe(
    //   events => console.dir(events)
    // );
    // this.activatedRoute.paramMap.subscribe(
    //   param => param.get('uuid')
    // );
  }

  goToEmployees() {
    this.router.navigate(['employees']);


  }
}
