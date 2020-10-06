import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';

  constructor(private testService: TestService) {
    console.log(testService.getEndPoint());
    console.log(testService.getLocalStorage());
  }
}
