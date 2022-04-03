import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { restdata } from './rest.model';

@Component({
  selector: 'app-restdash',
  templateUrl: './restdash.component.html',
  styleUrls: ['./restdash.component.css']
})
export class RestdashComponent implements OnInit {
  formValue!: FormGroup
  restmodelobj: restdata = new restdata;
  allrestdata: any;
  showad!:boolean;
  showup!:boolean;
  constructor(private formBuilder: FormBuilder, private Api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      time: [''],
      mobile: [''],
      price: ['']
    })
    this.getAlldata()
  }
  clickadd(){
    this.formValue.reset()
    this.showad=true
    this.showup=false
  }
  addresto() {
    this.restmodelobj.name = this.formValue.value.name;
    this.restmodelobj.time = this.formValue.value.time;
    this.restmodelobj.mobile = this.formValue.value.mobile;
    this.restmodelobj.price = this.formValue.value.price;

    this.Api.postrest(this.restmodelobj).subscribe(res => {
      console.log(res);
      alert("successfull");
      this.formValue.reset();
      this.getAlldata();
    },
      err => {
        alert("somthng wrong")
      }
    )
  }
  getAlldata() {
    this.Api.getrest(this.allrestdata).subscribe(res => {
      this.allrestdata = res;
    })
  }
  deleteresto(data: any) {
    this.Api.deleterest(data.id).subscribe(res => {
      alert("record deleted")
      this.getAlldata();
    })
  }
  oneditresto(data:any){
    this.showad=false
    this.showup=true
    this.restmodelobj.id=data.id
    this.formValue.controls['name'].setValue(data.name)
    this.formValue.controls['time'].setValue(data.time)
    this.formValue.controls['mobile'].setValue(data.mobile)
    this.formValue.controls['price'].setValue(data.price)
  }
  updateresto(){
    this.restmodelobj.name = this.formValue.value.name;
    this.restmodelobj.time = this.formValue.value.time
    this.restmodelobj.mobile = this.formValue.value.mobile
    this.restmodelobj.price = this.formValue.value.price


    this.Api.updaterest(this.restmodelobj,this.restmodelobj.id).subscribe(res=>{
      alert("restaurant updated")
      this.formValue.reset();
      this.getAlldata();
    })
  }
}





