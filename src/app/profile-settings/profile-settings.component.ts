import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent {
  userData = {
    name: '', // Initialize with current user data
    email: '', // Initialize with current user data
    address: '',
    description: ''
    // Add more properties for other profile settings
  };

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted with data:', this.userData);
    // You can send an HTTP request to update the user's profile settings
  }
}
