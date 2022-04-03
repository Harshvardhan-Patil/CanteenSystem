import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loogin',
  templateUrl: './loogin.component.html',
  styleUrls: ['./loogin.component.css']
})
export class LooginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  this.loginForm=this.formBuilder.group({
    email:[''],
    password:['']

  })
  }
  logIn()
{
  this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
    const user =res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password})
    if(user){
      alert("Login successfull");
      this.loginForm.reset();
      this.router.navigate(['loginmenu'])

    }else{
      alert("User not Found")
    }
  },err=>{
  alert("server side problem")
  }
  )
}}
