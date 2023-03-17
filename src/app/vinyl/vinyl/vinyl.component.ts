import {Component, Input} from '@angular/core';
import {Vinyl} from "../vinyl.model";

@Component({
  selector: 'app-vinyl',
  templateUrl: './vinyl.component.html',
  styleUrls: ['./vinyl.component.scss']
})
export class VinylComponent {
  public isEditing = false;

  @Input()
  public vinyl: Vinyl = {
    id: '',
    songName: '',
    author: {name: ''},
    imageUrl: '',
    releaseDate: new Date()
  }

  changeArtist(): void {
    this.isEditing = !this.isEditing;
  }

  onReleaseDateChange(newReleaseDate: Date) {
    this.vinyl.releaseDate = newReleaseDate;
  }
}
