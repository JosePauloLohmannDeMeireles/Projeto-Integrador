import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  vcurso: boolean = false
  exp: boolean = false
  ho: boolean = true

  curso():void {
    this.ho = false;
    this.exp = false;
    this.vcurso = true;
  }  

  ex(): void{
    this.ho = false
    this.vcurso = false
    this.exp = true
  }
  
  hob(): void{
    this.vcurso = false
    this.exp = false
    this.ho = true
  }
}
