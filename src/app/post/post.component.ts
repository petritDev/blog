import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;

  postCreated_at = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  isLiked() {
    this.postLoveIts += 1;
  }

  disLiked() {
    this.postLoveIts -= 1;
  }

  getPostStatus() {
    if (this.postLoveIts > 0) {
      return "list-group-item list-group-item-success";
    } else if (this.postLoveIts < 0) {
      return "list-group-item list-group-item-danger";
    } else {
      return "list-group-item";
    }
  }
}
