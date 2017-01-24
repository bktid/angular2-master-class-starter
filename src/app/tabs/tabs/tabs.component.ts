import { Component } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  tabs: TabComponent[] = [];

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      this.select(tab);
    }

    this.tabs.push(tab);
  }

  select(tab: TabComponent) {
    this.tabs.forEach(element => {
      element.selected = false;      
    });

    tab.selected = true;
  }

}
