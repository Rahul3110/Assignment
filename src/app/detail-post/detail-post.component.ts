import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  private userPost: any[];
  private visibleIndex:number = 0;
  postId: string;
  private isShow:boolean = false;
  userComment = new Map();
  private showall:boolean = false;

  constructor(private detailService: DetailService,
              private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
    if (this.detailService.subsVar == undefined) {
      this.detailService.subsVar = this.detailService.
      emitId.subscribe((userId) => {
          this.myPost(userId);
        });
    }
  }
  
  myPost(userId) {
    this.detailService.getPost(userId)
      .subscribe(data => {this.userPost = data
      this.SpinnerService.hide();
      });
  } 

  getComments(postId) {
    this.detailService.getComment(postId).subscribe(
      (data) => this.getCommentsForUser(data)
    );
  }

  getCommentsForUser(userComm) {
    for (var i = 0; i < userComm.length; i++) {
      this.userComment.set(userComm[i].name, userComm[i].postId);
    }
  }

  toggle(){
    this.isShow=!this.isShow;
    if(this.isShow){
      return true;
    }else
      return false;
  }

  showSubItem(ind) {
    if (this.visibleIndex === ind) {
      this.visibleIndex = -1;
    } else {
      this.visibleIndex = ind;
    }
  }

  hiddenButton(){
    return this.showall=!this.showall;
  }
}