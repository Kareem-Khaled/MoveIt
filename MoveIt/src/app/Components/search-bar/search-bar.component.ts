import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,HttpClientModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {

  fromDate!: Date; // You can use a Date object if needed
  toDate!: Date;
  searchBar!: FormGroup;
  
  
  constructor(private formBuilder: FormBuilder){
    this.searchBar = this.formBuilder.group({
      fromLocation: ['Egypt, Assiut',[Validators.required]],
      toLocation: ['USA, New YORK',[Validators.required]],
      fromDate: [new Date(),[Validators.required]],
      toDate: [new Date(),[Validators.required]],
      passengers: [1,[Validators.required]],
    });
    
  }
  
  ngOnInit(){
    
  }
  
  search() {
    console.log("Called: SearchBarComponent:Search() searchBar form data:",this.searchBar.value);

    if(!this.searchBar.valid){
      console.log(this.searchBar.value);
      alert("Please Enter valid data");
    }
    else {

    }
  }

  swapLocations() {
      const fromLocation = this.searchBar.get('fromLocation')?.value;
      const toLocation = this.searchBar.get('toLocation')?.value;
      this.searchBar.patchValue({fromLocation: toLocation, toLocation: fromLocation});
    }
      
  
  
}
