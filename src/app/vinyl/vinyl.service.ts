import {Injectable} from '@angular/core';
import {Vinyl} from "./vinyl.model";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VinylService {

  vinyls: Array<Vinyl> = [
    {
      id: "0",
      songName: 'Bad',
      author: {name: 'Michael Jackson'},
      imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg',
      releaseDate: new Date('1987-10-1'),
    },
    {
      id: "1",
      songName: 'Uprising',
      author: {name: 'Bob marley and the Wailers'},
      imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
      releaseDate: new Date('1980-07-10'),
    },
    {
      id: "2",
      songName: 'Hendrix in the west',
      author: {name: 'Jimi Hendrix'},
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg',
      releaseDate: new Date('1972-02-1'),
    },
    {
      id: "3",
      songName: 'Porgy and Bess',
      author: {name: 'Louis Armstrong et Ella Fitzgerald'},
      imageUrl: 'https://media1.jpc.de/image/w600/front/0/8436542011464.jpg',
      releaseDate: new Date('1958-10-30'),
    }
  ];

  private apiAddress = 'http://localhost:8080/api'

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Array<Vinyl>> {
    return this.http.get<Array<Vinyl>>(`${this.apiAddress}/vinyls`);
    // return this.http.get<Array<Vinyl>>(`${this.apiAddress}/vinyls`,
    //   {observe: "response"});
  }
}
