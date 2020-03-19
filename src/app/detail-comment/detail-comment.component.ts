import { Component, OnInit, Input } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-detail-comment',
  templateUrl: './detail-comment.component.html',
  styleUrls: ['./detail-comment.component.css']
})
export class DetailCommentComponent implements OnInit {
  public empComment = [];
  @Input('postId') public postId;

  constructor(private detailService: DetailService) { }

  ngOnInit() {
    if (this.detailService.subsVar1==undefined) { 
      this.detailService.subsVar1 = this.detailService.    
      invokeCommentFunction.subscribe((postId) => {    
        this.getComment(postId);    
      });
    }
  }

    getComment(postId) {
      console.log("comment-com:"+postId);
      this.detailService.getComment(postId)
          .subscribe(data => this.empComment = data);
    }

    isPostEqual() {
      console.log('rahul')
      this.detailService.invokeCommentFunction == this.empComment[0].postId;
    }
}
