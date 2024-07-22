import { Component, OnInit } from '@angular/core';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  values: string[] | undefined;
  notificationsEnabled: boolean = false;
  jobTypes = {
    fullTime: false,
    partTime: false,
    contract: false,
  };

  constructor() {
    this.values = [
      'Ahmedabad',
      'Bengaluru',
      'Chennai',
      'Delhi',
      'Hyderabad',
      'Mumbai',
      'Pune',
    ];
  }

  ngOnInit(): void {}

  saveSettings() {
    const settings = {
      values: this.values,
      notificationsEnabled: this.notificationsEnabled,
      jobTypes: this.jobTypes
    };

    // Save settings to local storage
    localStorage.setItem('settings', JSON.stringify(settings));
    console.log('Settings saved:', settings);
  }
}
