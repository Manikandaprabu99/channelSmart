import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

nForm = new FormGroup({
  username : new FormControl("",[Validators.required])
});

submitted(){
  alert("OK");
}

get UserName():FormControl{
return  this.nForm.get('username') as FormControl;
}


}
