import { Component } from '@angular/core';
import { TransactionsFormComponent } from "../../components/transactions-form/transactions-form.component";
import { CategoriesComponent } from "../../components/categories/categories.component";
import { TransactionsTableComponent } from "../../components/transactions-table/transactions-table.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TransactionsFormComponent, CategoriesComponent, TransactionsTableComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
