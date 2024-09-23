import { Component } from '@angular/core';
import { Router } from '@angular/router';
//
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  // Corrected to styleUrls
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(form: any) {
    const username = form.value.username;
    const password = form.value.password;

    if (username === 'admin' && password === '1234') {
      // Redirect to the dashboard
      this.router.navigate(['/dashboard']).then(() => {
        // Optional: Perform any action after navigation
      });
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
