import {Component, NgZone, ViewEncapsulation} from '@angular/core';
import {Toast, ToastPackage, ToastrService} from 'ngx-toastr';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-progress-toast-component',
  styleUrls: ['./progress-toast.scss'],
  template: `
    <div class="row toast">
      <div class="col-9">
        <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
          {{ title }}
        </div>
        <div *ngIf="message && options.enableHtml" role="alert" aria-live="polite"
             [class]="options.messageClass" [innerHTML]="message">
        </div>
        <div *ngIf="message && !options.enableHtml" role="alert" aria-live="polite"
             [class]="options.messageClass" [attr.aria-label]="message">
          {{ message }}
        </div>
      </div>
      <div class="col-3 text-right">
        <a *ngIf="!options.closeButton" class="btn btn-pink btn-sm" >
        </a>
        <a *ngIf="options.closeButton" (click)="remove()" class="btn btn-pink btn-sm">
          close
        </a>
      </div>
    </div>
    <div *ngIf="options.progressBar">
      <div class="toast-progress" [style.width]="width + '%'"></div>
    </div>
  `,
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        display: 'none',
        opacity: 0
      })),
      transition('inactive => active', animate('400ms ease-out', keyframes([
        style({
          transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
          opacity: 0,
        }),
        style({
          transform: 'skewX(20deg)',
          opacity: 1,
        }),
        style({
          transform: 'skewX(-5deg)',
          opacity: 1,
        }),
        style({
          transform: 'none',
          opacity: 1,
        }),
      ]))),
      transition('active => removed', animate('400ms ease-out', keyframes([
        style({
          opacity: 1,
        }),
        style({
          transform: 'translate3d(100%, 0, 0) skewX(30deg)',
          opacity: 0,
        }),
      ]))),
    ]),
  ],
  preserveWhitespaces: false,
  // encapsulation: ViewEncapsulation.None
})
export class ProgressToastComponent extends Toast {

  uploadProgress = 1;

  // // constructor is only necessary when not using AoT
  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
  }

  // action(event: Event) {
  //   event.stopPropagation();
  //   this.undoString = 'undid';
  //   console.log(event);
  //   this.toastPackage.triggerAction();
  //   return true;
  // }
}
