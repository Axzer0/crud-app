import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddComponent } from './login/add/add.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './login/navbar/navbar.component';
import { ViewComponent } from './login/view/view.component';
import { SearchComponent } from './login/search/search.component';
import { EditComponent } from './login/view/edit/edit.component';
import { DialogComponent } from './login/view/dialog/dialog.component';

import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {LoginService} from './service/login.service';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchService} from './service/search.service';
import {ForTableService} from './service/for-table.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddComponent,
    ViewComponent,
    SearchComponent,
    EditComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,SearchService,ForTableService],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
