import { Component, OnInit } from '@angular/core';
import { FoodDataService } from 'src/app/services/food-data.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  constructor(private foodData:FoodDataService) { }
  elemntsList:any;
  ngOnInit(): void {
    this.foodData.getMealsData().subscribe(
      Response=>this.elemntsList = Response['4_elements'][0]
    )
  }

}
