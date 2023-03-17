import {Component, OnInit} from '@angular/core';
import {Vinyl} from "../vinyl.model";
import {VinylService} from "../vinyl.service";
import {filter, map, Observable} from "rxjs";

@Component({
  selector: 'app-list-vinyl',
  templateUrl: './list-vinyl.component.html',
  styleUrls: ['./list-vinyl.component.scss']
})
export class ListVinylComponent implements OnInit {

  vinyls = new Observable<Array<Vinyl>>;

  constructor(private vinylService: VinylService) {
  }

  ngOnInit(): void {
    this.vinyls = this.vinylService.findAll();
    // .pipe(
    //   filter(res => res.ok),
    //   map(res => res.body),
    //   filter(vinyls => vinyls != null && vinyls.length != 0)
    // ).subscribe( vinyls => {
    //   this.vinyls = vinyls!;
    // });
  }
}
