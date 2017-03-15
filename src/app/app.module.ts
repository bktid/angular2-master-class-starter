import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { OpaqueToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsAppComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { APP_ROUTES } from './app.routes';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';
import { EventBusService } from './event-bus.service';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { EmailAvailabilityValidatorDirective } from './email-availability-validator.directive';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { APP_CONFIG_TOKEN, MASTER_CLASS_DI_CONFIG } from './app.config';
import { confirmNavigationGuard } from './contacts-editor/contacts-editor-guards';
import { ConfirmDeactivationDialogComponent } from './confirm-deactivation-dialog/confirm-deactivation-dialog.component';
import { CanDeactivateContactsEditorGuard } from './contacts-editor/contacts-editor-can-deactivate';
import { ContactsResolver } from './shared/contacts.resolver';

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabsComponent, TabComponent, ContactsCreatorComponent, EmailValidatorDirective, EmailAvailabilityValidatorDirective, ContactsDashboardComponent, ConfirmDeactivationDialogComponent],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService, 
    {provide: APP_CONFIG_TOKEN, useValue: MASTER_CLASS_DI_CONFIG },
    EventBusService,
    {provide: 'CONFIRM_NAVIGATION_GUARD', useValue: confirmNavigationGuard },
    CanDeactivateContactsEditorGuard,
    ContactsResolver,
  ],
  entryComponents: [ConfirmDeactivationDialogComponent]
})
export class ContactsModule {

}
