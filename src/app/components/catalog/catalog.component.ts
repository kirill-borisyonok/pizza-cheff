import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { PRODUCTS } from './entities/catalog.constants';

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  public readonly products = PRODUCTS;

  constructor(public dialog: MatDialog) {}

  public resizeImage(imgPath: string) {
    this.dialog.open(ModalComponent, {
      width: '70%',
      data: { img: imgPath },
    });
  }
}
