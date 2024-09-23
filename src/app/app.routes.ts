import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/startUp',
  },
  {path: 'login', loadComponent: () => import('./core/login/login.component').then(_ => _.LoginComponent)},
  {path: 'startUp', loadComponent: () => import('./core/startup-page/startup-page.component').then(_ => _.StartupPageComponent)},
  {path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(_ => _.DashboardComponent)},
  {path: 'home', loadComponent: () => import('./features/home/home.component').then(_ => _.HomeComponent)},
  {path: 'cashbook', loadComponent: () => import('./features/cashbook/cashbook.component').then(_ => _.CashbookComponent)},
  {path: 'accounts', loadComponent: () => import('./features/accounts/accounts.component').then(_ => _.AccountsComponent)},
  {path: 'ledger', loadComponent: () => import('./features/ledger/ledger.component').then(_ => _.LedgerComponent)},
  {path: 'transaction-history', loadComponent: () => import('./features/transaction-history/transaction-history.component').then(_ => _.TransactionHistoryComponent)},
  {path: 'trial-balance', loadComponent: () => import('./features/tri-balance/tri-balance.component').then(_ => _.TriBalanceComponent)},
  {path: 'accounts', loadComponent: () => import('./features/accounts/accounts.component').then(_ => _.AccountsComponent)},


  {path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(_ => _.NotFoundComponent)},

];
