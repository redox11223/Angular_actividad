import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from "./feature/list/list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('actividad');
}
