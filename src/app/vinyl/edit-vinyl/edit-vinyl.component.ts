import { Component } from '@angular/core';
import {Vinyl} from "../vinyl.model";
import {VinylService} from "../vinyl.service";

@Component({
  selector: 'app-edit-vinyl',
  templateUrl: './edit-vinyl.component.html',
  styleUrls: ['./edit-vinyl.component.scss']
})
export class EditVinylComponent {


  constructor(private vinylService: VinylService) {
  }

  saveVinyl(newVinyl: Vinyl): void {
    console.dir(newVinyl);
    // this.vinylService.save(newVinyl).subscribe(
    //
    // );
  }
}
