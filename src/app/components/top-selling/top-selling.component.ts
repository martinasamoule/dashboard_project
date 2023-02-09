import { Component, OnInit } from '@angular/core';
import { FoodDataService } from 'src/app/services/food-data.service';
import { Itopselling } from './../../models/itopselling';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.scss']
})
export class TopSellingComponent implements OnInit {
  topSellingDish:Itopselling[]=[];
  constructor(private foodData:FoodDataService) { 
  }

  ngOnInit(): void {
    this.foodData.getMealsData().subscribe(
      Response=>{this.topSellingDish = Response.top_selling 
      console.log(Response.transactions_report)}
    )
  }

}
