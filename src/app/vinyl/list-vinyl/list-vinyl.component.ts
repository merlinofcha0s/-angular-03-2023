import { Component } from '@angular/core';
import {Vinyl} from "../vinyl.model";

@Component({
  selector: 'app-list-vinyl',
  templateUrl: './list-vinyl.component.html',
  styleUrls: ['./list-vinyl.component.scss']
})
export class ListVinylComponent {

  vinyls: Array<Vinyl> = [
    {
      uuid: "0",
      title: 'Bad',
      artiste: 'Michael Jackson',
      imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg',
      releaseDate: new Date('1987-10-1'),
    },
    {
      uuid: "1",
      title: 'Uprising',
      artiste: 'Bob marley and the Wailers',
      imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
      releaseDate: new Date('1980-07-10'),
    },
    {
      uuid: "2",
      title: 'Hendrix in the west',
      artiste: 'Jimi Hendrix',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg',
      releaseDate: new Date('1972-02-1'),
    },
    {
      uuid: "3",
      title: 'Porgy and Bess',
      artiste: 'Louis Armstrong et Ella Fitzgerald',
      imageUrl: 'https://media1.jpc.de/image/w600/front/0/8436542011464.jpg',
      releaseDate: new Date('1958-10-30'),
    }
  ];

}