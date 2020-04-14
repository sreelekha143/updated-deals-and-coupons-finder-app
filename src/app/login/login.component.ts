import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={
    email:"",
    password:""
  }
  constructor( private _auth:AuthService,private router:Router,private toastrservice:ToastrService) { 
  
  }
  ngOnInit() {
  }
 loginUser(){
   this._auth.loginUser(this.loginUserData)
   .subscribe(
    res=>{console.log(res)
      localStorage.setItem('token',res.token)
      },
    
    err=>console.log(err)

    )
    this.router.navigate(['/home']);
    this.showSuccess()
 }
 showSuccess() {
  this.toastrservice.success('login successfully');
}

}

