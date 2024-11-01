import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink,NavbarComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers:[MoviesService]
})
export class SearchComponent implements OnInit{
movieTitle='';
searchResult :any[]=[];

  constructor(private _activatedRoute:ActivatedRoute,private movieService:MoviesService){
    this._activatedRoute.params.subscribe((p)=>{
      this.movieTitle=p["movieTitle"];
      
    })
  }

  ngOnInit(): void {
  this.searchMovies();
}

searchMovies(){
  this.movieService.searchMovies().subscribe((data:any[])=>{
    this.searchResult=data;
  })
}
}
