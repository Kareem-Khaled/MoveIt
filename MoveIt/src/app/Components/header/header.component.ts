import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, CalendarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
