import { Component } from '@angular/core';

@Component({
  selector: 'ge-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from
  //   template!</h1> <br>
  //   This is new line`,
  // styles: ['h1 { color: steelblue; }'],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edureka-app';

  role= 'User'; // User
}
