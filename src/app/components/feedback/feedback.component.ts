import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../data/model/Feedback';
import { CommonModule } from '@angular/common';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailDomainValidator } from '../../validators/emailValidator';
import { inappropriateKeywords } from '../../validators/keywordsValidator';
import { AuthGuard } from '../../auth.guard';
import { AuthModule } from '@auth0/auth0-angular';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,FormsModule,CommonModule,ReactiveFormsModule,AuthModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  providers:[AuthGuard]
})
export class FeedbackComponent  implements OnInit{
  feedbackForm!:FormGroup ;
  ngOnInit(): void {
    this.feedbackForm=new FormGroup
    ({
      emailAddress:new FormControl('',[Validators.required,Validators.email,emailDomainValidator('@asd')]),
      phoneNumber:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      rate:new FormControl(8,[Validators.min(0),Validators.max(10)]),
      feedbackTitle:new FormControl('',[Validators.required]),
      feedbackS:new FormControl('',[Validators.required,inappropriateKeywords(['spam','bot'])])
    })
  }

  constructor() {
    
  }

  submitFeedback(){
   console.log('Feedback form [Submit] - ',this.feedbackForm.value)
  }

}
