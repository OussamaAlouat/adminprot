import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})

export class PagesComponent {
  constructor(private settingService : SettingsService){}
}
