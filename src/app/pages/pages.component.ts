import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})

export class PagesComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    const value = theme ? theme : 'default';
    const url = `./assets/css/colors/${value}.css`;

    console.log(url)

    this.linkTheme?.setAttribute('href', url);
  }
}
