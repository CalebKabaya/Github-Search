import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.background = '#11444B';
    

  }
  // @HostListener("hover") onClicks(){
  //   this.textDeco("blue")
  // };
  // private textDeco(action:string){
  //   this.elem.nativeElement.style.color=action;

  // }
}
