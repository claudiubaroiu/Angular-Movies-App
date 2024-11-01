import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
@Component({
  selector: 'app-app-details-actors',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './app-details-actors.component.html',
  styleUrl: './app-details-actors.component.css',
  providers:[MoviesService]
})
export class AppDetailsActorsComponent implements OnInit {

  movieActors:any[]=[];
  
  
  
  
  constructor(private movieService:MoviesService){}

  ngOnInit(): void {
    this.loadMovieActors();
  }

loadMovieActors(){
    this.movieService.loadMovieActors().subscribe((data:any[])=>
    {
      this.movieActors=data;
    })
  }
  

  
}
