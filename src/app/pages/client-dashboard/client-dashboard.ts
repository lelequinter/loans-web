import { Component, inject } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

interface Loan {
  key: string;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-client-dashboard',
  imports: [NzTableModule, NzDividerModule, NzLayoutModule, NzFormModule, NzInputModule, NzCheckboxModule, NzButtonModule, NzIconModule, ReactiveFormsModule],
  templateUrl: './client-dashboard.html',
  styleUrl: './client-dashboard.scss',
})
export class ClientDashboard {
  listOfData: Loan[] = [
    {
      key: '1',
      amount: 1000,
      status: 'Active'
    },
  ];

  private fb = inject(NonNullableFormBuilder);
  loanForm = this.fb.group({
    amount: this.fb.control('', [Validators.required]),
    term: this.fb.control('', [Validators.required]),
  });

  submitForm(): void {
    if (this.loanForm.valid) {
      console.log('submit', this.loanForm.value);
    } else {
      Object.values(this.loanForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
