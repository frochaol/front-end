import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  constructor() { }
  @Input()
  contenidoMarkDown = '';

  @Input()
  placeHolderTextarea: string = 'Texto';
  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  inputTextArea(evento: any) : void {
    const texto = evento.target.value;
    this.contenidoMarkDown = texto;
    this.changeMarkdown.emit(texto);
  }
}
