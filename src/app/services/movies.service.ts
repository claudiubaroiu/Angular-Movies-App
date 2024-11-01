import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  

  constructor(private httpClient:HttpClient) 
  {
    
   }

   getFanFavoritesMovies(){
   return this.httpClient.get<any[]>('assets/fanFavoritesMovies.json');
   }

   getTopMovies(){
    return this.httpClient.get<any[]>('assets/topMovies.json');
   }

   loadMovieSummary(){
    return this.httpClient.get('assets/movieSummary.json');
   }

   loadMovieActors(){
    return this.httpClient.get<any[]>('assets/movieActors.json');
   }

   loadDetailsMovies(){
    return this.httpClient.get<any[]>('assets/detailsMovies.json');
   }

   loadDetailsReviews(){
   return this.httpClient.get<any[]>('assets/movieReviews.json');
   }

   searchMovies(){
    return this.httpClient.get<any[]>('assets/movieSearch.json');
   }
}
