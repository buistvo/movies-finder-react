export class Movie {
  imageUrl: string = '';
  name: string = '';
  releaseDate: Date = new Date();
  genreList: string[] = [];
  rating: number | null = null;
  duration: string = '';
  description: string = '';
}
