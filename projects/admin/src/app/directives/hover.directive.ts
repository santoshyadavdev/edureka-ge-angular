import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit, OnChanges {

  // @Input('appHover') color = 'red';

  @Input() color = 'red';

  @Output() colorChange = new EventEmitter<string>();

  constructor(private elementref: ElementRef,
    private rendered: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    console.log(this.elementref.nativeElement);
    // this.elementref.nativeElement.style.backgroundColor= "red";
    this.rendered.setStyle(this.elementref.nativeElement, 'background-color', this.color);
    this.rendered.addClass(this.elementref.nativeElement, 'form-control');
  }

  @HostListener('mouseover') onmouseover() {
    this.rendered.setStyle(this.elementref.nativeElement, 'background-color', "green");
  }

  @HostListener('mouseleave') onmouseleave() {
    this.rendered.setStyle(this.elementref.nativeElement, 'background-color', "white");
  }


}
