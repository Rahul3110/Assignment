import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { DetailService } from './detail.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    DetailPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
