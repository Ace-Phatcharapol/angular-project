import {Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers,faStore,faComments,faBriefcase,faTruckFast,faThumbsUp,faGlobe,faHandHoldingHeart,faLocationDot,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, ReactiveFormsModule],
})
export class HomeComponent {
  faUsers = faUsers;
  faStore = faStore;
  faComments = faComments;
  faBriefcase = faBriefcase;
  faThumbsUp = faThumbsUp;
  faGlobe = faGlobe;
  faTruckFast = faTruckFast;
  faHandHoldingHeart = faHandHoldingHeart;
  faLocationDot = faLocationDot;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;

  subscribeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}