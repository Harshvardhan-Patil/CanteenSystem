import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup
  constructor(private formBuidler:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm =this.formBuidler.group({
      name:[''],
      email:[''],
      mobile:[''],
      password:['']
    })
  }
  signUp(){
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res=>
    {
      alert("reg success");
      this.signupForm.reset();
      this.router.navigate(['loogin'])
  }, err=>{
    alert("something went wrong")
  }
  )
}
}
