import {OpaqueToken} from '@angular/core';
import {Component} from '@angular/core';

// navigation guard werkt niet met opaquetoken
// https://github.com/angular/angular/issues/13774
// export const CONFIRM_NAVIGATION_GUARD = new OpaqueToken('ConfirmNavigationGuard');

export function confirmNavigationGuard(component) {
  return window.confirm('Navigate away without saving?');
}