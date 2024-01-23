import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TripListComponent } from './Components/trip-list/trip-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { FilterComponent } from './Components/filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TripListComponent, HeaderComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MoveIt';
}
