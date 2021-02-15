import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestCase';

  totalVote = 0;

  upVote(){
    this.totalVote++;
  }

  downVote(){
    this.totalVote--;
  }

  
}
