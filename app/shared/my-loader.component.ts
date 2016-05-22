import {Component, Input} from '@angular/core';

@Component({
  selector : 'my-loader',
  template :`
  <div *ngIf="isLoading">
    <i class="fa fa-spinner fa-spin fa-3x myspinner"></i>
  </div>
  `,
  styles: [`.myspinner {
      color : red;  
  }`]
})
export class MyLoadComponment {

  @Input('show') isLoading : boolean;

}
