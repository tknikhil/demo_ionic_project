import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Ready to create an app?';
  onChangeText() {
    this.text = 'Ohh! I am born Ready!';
  }
}
