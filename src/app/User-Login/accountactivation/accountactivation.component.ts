import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accountactivation',
  templateUrl: './accountactivation.component.html',
  styleUrls: ['./accountactivation.component.css']
})
export class AccountactivationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

aForm = new FormGroup({
  username : new FormControl("",Validators.required),
  code: new FormControl("",Validators.required)
});

submitted(){
  alert("ok");
}

get  UserName():FormControl{
  return this.aForm.get("username") as FormControl;
}

get Code(): FormControl{
  return this.aForm.get("code") as FormControl;
}

}
