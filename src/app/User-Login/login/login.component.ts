import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }
 
loginForm = new FormGroup({
  username:new FormControl("",[Validators.required]),
    password: new FormControl("",[
      Validators.required
    ])
});




submitted():void{
  
  // let payload:any = this.loginForm.value;

  // console.log(payload);
  // payload["grand_type"] = "password";
  // payload["client_id"] = "nexusWeb";
   
  if(this.loginForm.valid){
    const cred = this.loginForm.value;
  this.loginService.login(cred).subscribe((result:any)=>{
   console.log(result);
   alert("login successful");
   
  })
}

}

get UserName(): FormControl{
  return this.loginForm.get('username') as FormControl;
}

get Password(): FormControl{
  return this.loginForm.get('password') as FormControl;
}
}
