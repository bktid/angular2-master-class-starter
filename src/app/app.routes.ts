import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';
import { CanDeactivateContactsEditorGuard } from './contacts-editor/contacts-editor-can-deactivate';
import { ContactsResolver } from './shared/contacts.resolver';

export const APP_ROUTES = [
    { path: 'contact/new', component: ContactsCreatorComponent },
    { path: '', 
      component: ContactsDashboardComponent,
      children: [
        { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
        { 
          path: 'contact/:id', 
          component: ContactsDetailViewComponent,
          resolve: { contact: ContactsResolver }
        },
        { 
          path: 'contact/:id/edit', 
          component: ContactsEditorComponent, 
          canDeactivate: ['CONFIRM_NAVIGATION_GUARD', CanDeactivateContactsEditorGuard] ,
          resolve: { contact: ContactsResolver }
        }
      ] 
    },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '**', redirectTo: '/'}
]