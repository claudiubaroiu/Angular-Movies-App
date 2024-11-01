import { Component, OnInit} from '@angular/core';
import { SearchComponent } from '../search/search.component';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderDirective } from '../../directives/header.directive';
import { MyIfDirective } from '../../directives/my-if.directive';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent,RouterLink,RouterOutlet,FormsModule,CommonModule,HeaderDirective,MyIfDirective,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[MoviesService]
})
export class HomeComponent implements OnInit {
isActive=false;
movieId=''
fanFavoritesMovies:any[]=[]



topMovies:any[]=[]

constructor(private movieService:MoviesService){

}
ngOnInit(): void {
  this.getFanFavoritesMovies();
  this.getTopMovies();
}

getFanFavoritesMovies()
{
  this.movieService.getFanFavoritesMovies().subscribe({
    
    next:(data:any[])=>{
    this.fanFavoritesMovies=data;
  },
  error:(error)=>{
    console.log("Error",error);
  },
  complete:()=>{
    console.log("Completed succesfuly");
  }
  
})
}

getTopMovies()
{
  this.movieService.getTopMovies().subscribe({
    next:(data:any[])=>{
      this.topMovies=data;
    },
  
  error:(error)=>{
    console.log("Error",error);
  },
  complete:()=>{
    console.log("Completed succesfuly");
  }
})
}


}



