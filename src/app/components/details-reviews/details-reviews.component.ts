import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-reviews',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css',
  providers:[MoviesService]
})
export class DetailsReviewsComponent implements OnInit{
  reviews:any[]=[];

  constructor(private movieService:MoviesService){}

  ngOnInit(): void {
    this.loadDetailsReviews();
  }

  loadDetailsReviews(){
   this.movieService.loadDetailsReviews().subscribe((data:any[])=>{
      this.reviews=data;
    })
  }
}
