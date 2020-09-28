import {Routes} from "@angular/router";
import {AddComponent} from '../login/add/add.component';
import {ViewComponent} from '../login/view/view.component';
import {SearchComponent} from '../login/search/search.component';
import {NavbarComponent} from '../login/navbar/navbar.component';
import {LoginComponent} from '../login/login.component';

export const routes: Routes =[
  {path:'add', component: AddComponent},
  {path:'view', component: ViewComponent},
  {path:'search', component: SearchComponent},
  {path:'nav', component: NavbarComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},




]
