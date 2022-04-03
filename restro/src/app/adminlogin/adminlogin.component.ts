import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminloginForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private _http:HttpClient,private router:Router) {

  }

  ngOnInit(): void {
    this.adminloginForm=this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
adminlogin()
{
  this._http.get<any>("http://localhost:3000/admin").subscribe(res=>{
    const user =res.find((a:any)=>{
      return a.email === this.adminloginForm.value.email && a.password === this.adminloginForm.value.password})
    if(user){
      alert("Admin-Login successfull");
      this.adminloginForm.reset();
      this.router.navigate(['restdash'])
    }else{
      alert("admin not Found")
    }
  },err=>{
  alert("server side problem")
  }
  )
}}
