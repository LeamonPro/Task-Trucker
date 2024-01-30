import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  text!: string; 
  @Input()
  color!: string;
  @Output() buttonClick=new EventEmitter();
  onClick(){
    this.buttonClick.emit();
  }
}
