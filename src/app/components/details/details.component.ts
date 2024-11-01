import { Component, OnInit } from '@angular/core';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';
import { AppDetailsActorsComponent } from '../details-actors/app-details-actors.component';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HttpClientModule,DetailsMoviesComponent,DetailsReviewsComponent,AppDetailsActorsComponent,SearchComponent,RouterLink,CommonModule],
  templateUrl: './details.component.html' ,
  styleUrl: './details.component.css',
  providers:[MoviesService]
})


export class DetailsComponent implements OnInit{

  movieId='';
  stars=[];
  directors=[];
  genres=[];

  constructor(private _activedRoute:ActivatedRoute,private movieService:MoviesService){
    this._activedRoute.params.subscribe((p)=>{
      this.movieId=p["id"];
    })
  }
 
    

    ngOnInit(): void {
      this.loadMovieSummary();
    }
   

    loadMovieSummary(){
      this.movieService.loadMovieSummary().subscribe((data:any)=>{
        console.log('Summary - ',data);
        this.stars=data.stars;
        this.directors=data.directors;
        this.genres=data.genres;
    })
  }
   
 

}