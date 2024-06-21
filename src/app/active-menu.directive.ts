import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveMenu]'
})
export class ActiveMenuDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const parent = this.el.nativeElement.parentElement.parentElement;
    const children = parent.querySelectorAll('.nav-item .nav-link');
    
    children.forEach((child: any) => {
      this.renderer.removeClass(child, 'active');
    });

    this.renderer.addClass(this.el.nativeElement, 'active');
  }
}
