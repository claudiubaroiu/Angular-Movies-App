import { Component, NgModule, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,SearchComponent,FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[AuthService]
})
export class NavbarComponent implements OnInit{

  public loggedInUser:any;
constructor(public auth:AuthService) {

}

ngOnInit(): void {
  if(this.auth.user$){
    this.auth.user$.subscribe((data)=>{
    this.loggedInUser=data
  });
  }
}
  searchMovieTitle=' ';




 

}
