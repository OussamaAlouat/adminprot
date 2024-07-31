import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');


  constructor() {
    this.initTheTheme();
  }

  initTheTheme() {
    const theme = localStorage.getItem('theme');
    const value = theme ? theme : 'default';
    const url = `./assets/css/colors/${value}.css`;

    this.linkTheme?.setAttribute('href', url);
  }


  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', theme);
    this.checkCurrentTheme();
  }


  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    links.forEach(elem => {
       elem.classList.remove('working');
       const btnTheme = elem.getAttribute('data-theme');
       const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
       const currentTheme = this.linkTheme?.getAttribute('href');
 
       if(btnThemeUrl === currentTheme) {
         elem.classList.add('working')
       }
    })
   }


}
