import { Component } from '@angular/core';
import { DetailsMoviesComponent } from '../details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../details-reviews/details-reviews.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DetailsMoviesComponent,DetailsReviewsComponent],
  templateUrl: './details.component.html' ,

  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
