import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  // template: `
  //   <nav>
  //     <a routerLink="/">Home</a>
  //     |
  //     <a routerLink="/user">User</a>
  //   </nav>
    
  // `,
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FontAwesomeModule],
})
export class AppComponent {}
