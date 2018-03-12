import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit, OnChanges, DoCheck {

  @Input() input1: string;
  @Output() output1: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('[ngOnInit] fired. ');
    this.input1 = 'update';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[ngOnChanges] fired. ', changes);
  }

  ngDoCheck(): void {
    console.log('[ngDoCheck] fired. ');
  }

  onClick() {
    console.log('[onClick] fired. ');
    this.output1.emit('aaa');
  }

}
