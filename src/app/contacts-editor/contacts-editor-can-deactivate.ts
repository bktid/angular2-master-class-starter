import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { ContactsEditorComponent } from './contacts-editor.component';
import { ConfirmDeactivationDialogComponent } from '../confirm-deactivation-dialog/confirm-deactivation-dialog.component';

@Injectable()
export class CanDeactivateContactsEditorGuard implements CanDeactivate<ContactsEditorComponent> {

    constructor(private dialog: MdDialog) {}

    canDeactivate(component: ContactsEditorComponent) {
        if (component.saveWasClicked) {
            return Observable.of(true);
        }

        let ref: MdDialogRef<ConfirmDeactivationDialogComponent> = this.dialog.open(ConfirmDeactivationDialogComponent);
        return ref.afterClosed();
    }
}