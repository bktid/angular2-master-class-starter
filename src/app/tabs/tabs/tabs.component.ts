import { Component, QueryList, ContentChildren, AfterContentInit } from '@angular/core';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  //CONTENT children are queried, that's all the things between <trm-tabs></trm-tabs>
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.select(this.tabs.first);
  }

  select(tab: TabComponent) {
    this.tabs.forEach(element => {
      element.selected = false;      
    });

    tab.selected = true;
  }

}
