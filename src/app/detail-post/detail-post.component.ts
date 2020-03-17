import { Component, OnInit, Input } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  public empPost = [];
  public postId;


  constructor(private detailService: DetailService) { }

  ngOnInit() {    
    if (this.detailService.subsVar==undefined) {    
      this.detailService.subsVar = this.detailService.    
      invokeFirstComponentFunction.subscribe((userId) => {    
        this.myPost(userId);    
      });    
    }    
  } 

  myPost(userId) {
    this.detailService.getPost(userId)
        .subscribe(data => this.empPost = data);
  }

  getComments(postId){  
    this.postId = postId;  
    console.log("postcomponent:"+postId);
    this.detailService.onClickComment(postId);    
  } 

}
