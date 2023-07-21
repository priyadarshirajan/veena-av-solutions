import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedElement : any;
  displayName : string = "none";

  changeDisplayType() {
    this.selectedElement = document.getElementById("myLinks");
    if(this.selectedElement) {
      this.displayName = this.displayName == "none" ? "block": "none";
      this.selectedElement.style.display = this.displayName;
    }
  }
}
