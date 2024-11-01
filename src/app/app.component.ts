import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DetailsComponent } from "./components/details/details.component";
import { CommonModule } from '@angular/common';
import { ProfitPipe } from './pipes/profit.pipe';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderDirective } from './directives/header.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthGuard } from './auth.guard';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterLink,
     DetailsComponent,
     CommonModule,
     ProfitPipe,
     FormsModule,
     NavbarComponent,
     HomeComponent,
     FooterComponent,
     SearchComponent,
     NotFoundComponent,
    HeaderDirective,
    MyIfDirective,
    FeedbackComponent
    
    
    
    ],
    providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title="app"
  
  fullName="Claudiu Baroiu";
}
