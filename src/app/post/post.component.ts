import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

  like(): void {
    this.post.loveIts += 1;
  }

  dislike(): void {
    this.post.loveIts -= 1;
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
