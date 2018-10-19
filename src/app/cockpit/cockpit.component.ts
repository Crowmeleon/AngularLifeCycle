import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ServerData } from './serverData.model'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output() blueprintCreated = new EventEmitter<ServerData>();
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServerElement(type, name: HTMLInputElement) {
    let newServerType = type === 'serverCreated' ? 'server' : 'blueprint';
    this.serverCreated.emit({
      name: name.value,
      content: this.serverContentInput.nativeElement.value,
      type: newServerType
    })
  }
}
