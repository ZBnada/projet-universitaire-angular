import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinddingComponent } from "./components/data-binding/data-bindding/data-bindding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinddingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-universitaire-angular';
}
