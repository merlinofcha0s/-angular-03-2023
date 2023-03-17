export interface Vinyl {
  id: string,
  songName: string,
  imageUrl: string,
  author: Author,
  releaseDate: Date;
}

export interface Author {
  name: string;
}
