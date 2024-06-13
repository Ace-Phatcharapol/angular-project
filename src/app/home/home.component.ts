import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers,faStore,faComments,faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule]
})
export class HomeComponent {
  faUsers = faUsers;
  faStore = faStore;
  faComments = faComments;
  faBriefcase = faBriefcase;
}