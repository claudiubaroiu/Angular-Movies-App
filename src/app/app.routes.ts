import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Component, NgModule } from '@angular/core';
import { DetailsComponent } from './components/details/details.component';
import { AppDetailsActorsComponent } from './components/details-actors/app-details-actors.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {  AuthModule } from '@auth0/auth0-angular';
import { AuthGuard } from './auth.guard';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'details/:id',component:DetailsComponent},
    {path:'details/actors/:id',component:AppDetailsActorsComponent},
    {path:'details/movies/:id',component:DetailsMoviesComponent},
    {path:'details/reviews/:id',component:DetailsReviewsComponent},
    {path:'feedback',component:FeedbackComponent,canActivate:[AuthGuard]},
    {path:'search/:movieTitle',component:SearchComponent},
    {path:'401',component:NotAuthorizedComponent},
    {path:'**',component:NotFoundComponent}
   
];

@NgModule({
     imports:[RouterModule.forRoot(routes,{useHash:false}),HttpClientModule],
       
    exports:[RouterModule],
    providers:[MoviesService,GlobalErrorHandlerService,AuthGuard]
})

export class AppRoutesModule{}