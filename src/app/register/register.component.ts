import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUserData={
  email:"",
  password:""
}
  constructor(private _auth:AuthService,private router:Router,private toastrservice:ToastrService) { }

  ngOnInit(): void {
  }
registerUser(){
  this._auth.registerUser(this.registerUserData).subscribe(
    res=>{
      console.log(res)
    localStorage.setItem('token',res.token)
    },
    err=>console.log(err)

    )
    this.router.navigate(['/login'])
    this.showSuccess()
}
showSuccess() {
  this.toastrservice.success('Register successfully');
}
}
