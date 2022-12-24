import { Component, HostListener, OnInit } from '@angular/core';
import { INTRODUCTION_ITEMS } from './entities/introduction.constants';

@Component({
  selector: 'introduction-component',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  public readonly introductionItems = INTRODUCTION_ITEMS;

  public getScreenWidth: number;

  public ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(): void {
    this.getScreenWidth = window.innerWidth;

    console.log(this.getScreenWidth);
  }
}
