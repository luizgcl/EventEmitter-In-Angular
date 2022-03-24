import { Component, OnInit } from '@angular/core';
import { ClientRegiserEvent } from '../events/create.event';
import axios from 'axios';

@Component({
  selector: 'primay-component',
  templateUrl: './primay-component.component.html',
  styleUrls: ['./primay-component.component.css']
})
export class PrimayComponent implements OnInit {

  constructor() {}

  event: ClientRegiserEvent = new ClientRegiserEvent();

  ngOnInit(): void {
    this.event.listen();
  }

  onEmit(): void {
    axios.get('https://jsonplaceholder.typicode.com/todos/599').then((response) => {
      this.event.call();
    }).catch((error) => {
      this.event.callWhenErrorAppears();
    })
  }

}
