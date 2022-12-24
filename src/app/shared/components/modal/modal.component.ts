import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from '../../interfaces/modal.interface';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
