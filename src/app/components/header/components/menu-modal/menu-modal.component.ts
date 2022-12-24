import { Component } from '@angular/core';
import { NAV_ITEMS } from '../../entities/header.constants';

@Component({
  selector: 'menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
})
export class MenuModalComponent {
  public readonly navItems = NAV_ITEMS;
}
