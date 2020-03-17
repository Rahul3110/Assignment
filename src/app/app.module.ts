import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { DetailService } from './detail.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { DetailCommentComponent } from './detail-comment/detail-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    DetailPostComponent,
    DetailCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
