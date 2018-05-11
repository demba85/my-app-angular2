import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

//Service
import { UserService } from './services/user.service';
import { AppareilService } from './services/appareil.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';

//route
import { RouterModule, Routes } from '@angular/router';

import { FourFourComponent } from './four-four/four-four.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { SingleBookComponent } from './single-book/single-book.component';
import { BookFormComponent } from './book-form/book-form.component';


const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'books/view/id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent },
  { path: 'users', canActivate: [AuthGuardService], component: UserListComponent },
  { path: 'new-user', canActivate: [AuthGuardService], component: NewUserComponent },
  { path: 'acceuil', component: AppComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourFourComponent },
  { path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FourFourComponent,
    NewUserComponent,
    AppareilComponent,
    AppareilViewComponent,
    EditAppareilComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,
             AppareilService,
             AuthService,
             AuthGuardService,
             BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
