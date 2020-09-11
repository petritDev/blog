import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts = [
    {
      title: "Mon premier Post",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsum ratione asperiores dolor veniam eius quibusdam odit ab accusamus ipsam.",
      loveIts: 0,
      created_at: Date
    },
    {
      title: "Mon deuxième Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      loveIts: 0,
      created_at: Date
    },
    {
      title: "Mon troisième Post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda facere natus provident minima ipsam molestiae, tempora nihil consequuntur similique, laboriosam esse consectetur.",
      loveIts: 0,
      created_at: Date
    }
  ];

}
