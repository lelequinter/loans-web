import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';

interface LoanWithUser {
  key: string;
  user: string;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [NzTableModule, NzDividerModule, NzButtonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {
  listOfData: LoanWithUser[] = [
    {
      key: '1',
      user: 'John Doe',
      amount: 1000,
      status: 'Active'
    },
  ];
}
