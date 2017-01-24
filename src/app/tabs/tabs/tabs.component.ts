import { Component, OnInit } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabs: TabComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    this.tabs.push(tab);

    if (this.tabs.length === 1) {
      this.select(tab);
    }
  }

  select(tab: TabComponent) {
    this.tabs.forEach(element => {
      element.selected = false;      
    });

    tab.selected = true;
  }

}
