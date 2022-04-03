import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { restodata } from './menu.model';

@Component({
  selector: 'app-loginmenu',
  templateUrl: './loginmenu.component.html',
  styleUrls: ['./loginmenu.component.css']
})
export class LoginmenuComponent implements OnInit {
  formValue!: FormGroup
  allrestdata:any;
  restmodelobj: restodata = new restodata;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      time: [''],
      mobile: [''],
      price: ['']
    })
    this.getAlldata()
  }
  getAlldata() {
    this.api.getrest(this.allrestdata).subscribe(res => {
      this.allrestdata = res;
      this.getAlldata()

    })

}
}
