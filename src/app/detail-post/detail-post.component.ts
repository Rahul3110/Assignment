import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__, Input } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  public empPost = [];
  @Input('parentData') public userId;

  constructor(private detailService: DetailService) { }

  ngOnInit() {
    if(this.userId) {
    this.myPost(this.userId);
    }
  }

  myPost(userId) {
   
    console.log("myPost:"+userId);
    this.detailService.getPost(userId)
        .subscribe(data => this.empPost = data);
        this.userId = null;
    
    
  }

  

}
