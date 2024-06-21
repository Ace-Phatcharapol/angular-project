import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faYoutube,faFacebookF,faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';

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
export class AppComponent {
  faYoutube = faYoutube;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faGithub = faGithub;
}
