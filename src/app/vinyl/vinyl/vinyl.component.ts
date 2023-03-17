import {Component, Input} from '@angular/core';
import {Vinyl} from "../vinyl.model";

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent {

  @Input()
  public vinyl: Vinyl = {
    uuid: '',
    title: '',
    artiste: '',
    imageUrl: '',
    releaseDate: 0
  }

  changeArtist(): void {
    this.vinyl.artiste = 'King of Pop';
  }

  onReleaseDateChange(newReleaseDate: number) {
    this.vinyl.releaseDate = newReleaseDate;
    //emit
  }
}
