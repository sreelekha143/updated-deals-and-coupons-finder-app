import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './home/item/item.component';
import { ItemgetComponent } from './home/item/itemget/itemget.component';
import { ItemService } from './item.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CouponsComponent } from './coupons/coupons.component';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import {MatBadgeModule} from '@angular/material/badge';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Register'},
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  { path: 'item', component: ItemComponent},
{path:'cart',component:CartComponent},
  {path:'coupons',component:CouponsComponent},
  {path:'order',component:OrderComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,

    HomeComponent,
    RegisterComponent,
    ItemComponent,
    ItemgetComponent,
  
    CouponsComponent,
  
    CartComponent,
  
    OrderComponent,
   
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule, BrowserAnimationsModule,
    HttpClientModule,ToastrModule.forRoot(),MatBadgeModule
  ],
  providers: [ItemService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
