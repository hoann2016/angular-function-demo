import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { NgChildComponent } from './ng-child/ng-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.myChildrenCpn);
  }
  title = 'my-ng-children';
  @ContentChild(NgChildComponent) myChildrenCpn:ElementRef | undefined;

}
