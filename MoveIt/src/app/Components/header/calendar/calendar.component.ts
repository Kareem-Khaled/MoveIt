import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {

  constructor() { }
  days: Date[] = [];
  activeDate: Date | null = null;

  ngOnInit(): void {
    this.days = this.getWeekDates(new Date());
    this.activeDate = this.days[0];
  }

  getWeekDates(startDate: Date): Date[] {
    const weekDates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  }


  setActiveDate(day: any): void {
    this.activeDate = day;
  }

  isActiveDate(day: any): boolean {
    return this.activeDate === day;
  }

}

