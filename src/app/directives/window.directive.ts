import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appWindow]',
  exportAs: 'player'
})
export class WindowDirective {
  private readonly _element: HTMLElement;
  private readonly _parent: HTMLElement;
  private _renderer: Renderer2;
  private _window: Window;

  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
    this._renderer = renderer;
    this._element = this.hostElement.nativeElement;
    this._parent = this._renderer.parentNode(this._element)
  }

  open(){
    this._window = window.open('','','width=422, height=245');
    this._renderer.appendChild(this._window.document.body, this._element);
  }

  close(){
    this._renderer.appendChild(this._parent, this._element);
    this._window.close();
  }

}
