import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'my-pagination',
  template: `
  <nav *ngIf="items.length > pageSize">
    <ul class="pagination">
      <li [class.disabled]="currentPage == 1">
        <a (click)="previous()" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li [class.active]="currentPage == page" *ngFor="let page of pages" (click)="changePage(page)">
         <a>{{page}}</a>
      </li>

      <li [class.disabled]="currentPage == pages.length">
        <a (click)="next()" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  `
})
export class MyPaginationComponent implements OnChanges {
    @Input() items: any[];
    @Input('pagesize') pageSize : number = 20;

    @Output('page-changed') pageChanged = new EventEmitter();
    currentPage : number;
    pages: number[];



    ngOnChanges() {
      this.currentPage = 1;
      var pageCount = this.items.length / this.pageSize;
      this.pages = [];
      for (var i=1; i<=pageCount; i++) {
         this.pages.push(i);
       }
    }

changePage(page : number) {
   this.currentPage = page;
   console.log('current page:' + this.currentPage);
   this.pageChanged.emit(page);
}
    previous() {
      if (this.currentPage == 1) {
          return;
      }
      this.currentPage --;
      this.pageChanged.emit(this.currentPage);
    }

    next() {
       if (this.currentPage == this.pages.length)
          return;

      this.currentPage ++;
      this.pageChanged.emit(this.currentPage);
    }
}
