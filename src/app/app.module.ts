import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import {Routes} from '@angular/router';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {path: 'Posts',  component: PostListComponent},
  {path: 'NewPost', component: NewPostComponent},
  {path: '**', component: PostListComponent},
  {path: '', component: PostListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
