import { Component, OnInit } from '@angular/core';
import { Idish } from './../../models/idish';
import { FoodDataService } from './../../services/food-data.service';


@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss']
})
export class RecentTransactionComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  searchText: string = '';
  foodList:Idish[]=[];

  constructor(private foodData:FoodDataService) { }

  ngOnInit(): void {
    this.foodData.getMealsData().subscribe(
      Response=>this.foodList = Response.recent_transaction
    )

  }

}
