import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { phoneValidator } from './entities/order.constants';
import { OrderForm } from './entities/order.interfaces';

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  public form!: FormGroup<OrderForm>;

  public getScreenWidth: number;

  private dot = '.';

  @HostListener('window:resize', ['$event'])
  public onWindowResize(): void {
    this.getScreenWidth = window.innerWidth;
  }

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.form = this.fb.group<OrderForm>({
      name: this.fb.control('', Validators.required),
      address: this.fb.control('', Validators.required),
      phone: this.fb.control('', [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(10),
        phoneValidator(),
      ]),
    });

    this.getScreenWidth = window.innerWidth;
  }

  public submit(): void {
    this.dialog.open(ModalComponent, {
      width: '25rem',
      data: { name: this.form.controls.name.value, text: 'Спасибо за заказ!' },
    });
    this.form.reset();
  }

  public dotValidator = (event: KeyboardEvent): boolean =>
    event.key !== this.dot;
}
