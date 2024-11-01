import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-movies',
  standalone: true,
  imports: [CommonModule,RouterLink,HttpClientModule],
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css',
  providers:[MoviesService]
})
export class DetailsMoviesComponent implements OnInit {
movies:any[]=[]

ngOnInit(): void {
  this.loadDetailsMovies();
}

constructor(private movieService:MoviesService){}

loadDetailsMovies()
{
 this.movieService.loadDetailsMovies().subscribe((data:any[])=>{
    this.movies=data;
  })
}
}
