import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuModalComponent } from './components/menu-modal/menu-modal.component';
import { NAV_ITEMS } from './entities/header.constants';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public readonly navItems = NAV_ITEMS;

  public getScreenWidth: number;

  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  public onWindowResize(): void {
    this.getScreenWidth = window.innerWidth;
  }

  public openMenu(): void {
    this.dialog.open(MenuModalComponent, {
      position: {
        top: '4rem',
        right: '1rem',
      },
      autoFocus: false,
    });
  }
}
