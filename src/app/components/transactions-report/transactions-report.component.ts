import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { FoodDataService } from 'src/app/services/food-data.service';
import { Ielements } from './../../models/ielements';

@Component({
  selector: 'app-transactions-report',
  templateUrl: './transactions-report.component.html',
  styleUrls: ['./transactions-report.component.scss']
})
export class TransactionsReportComponent implements OnInit {
  svg: any;
  margin = 50;
  width = 600 - this.margin * 2;
  height = 400 - this.margin * 2;
  tranctionList:any[]=[];
  data:Ielements[]=[]
  constructor(private foodData:FoodDataService) {
   }
  
  ngOnInit(): void {
    this.createSvg();
    this.foodData.getMealsData().subscribe(
      Response=>{
        this.tranctionList = Response.transactions_report
        let i = 0 ;
        for (let index = 10; index < 21; index++) {
          this.data[i]={"date":'01/'+(index+1),"highPercent":Response.transactions_report[index]['2023/01/'+(index+1)].high ,"lowPercent":Response.transactions_report[index]['2023/01/'+(index+1)].low}
          i++ ;
        
        }
        this.drawBars(this.data);
      }
      
    )

  }
  createSvg(): void {
    this.svg = d3
      .select("figure#bar")
      .append("svg")
      .attr("height", this.height + this.margin * 2)
      .attr("width", this.width + this.margin * 2)
      .append("g")
      .attr("id", "barChart")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  drawBars(data: Ielements[] ): void {
    console.log(data)
    console.log(this.width)
    console.log(this.height)
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.date))
    .padding(0.2);
  
    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  
    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([200, 3600])
    .range([this.height, 0]);
  
    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));
  
    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d: any) => x(d.date))
    .attr("y", (d: any) => y(d.highPercent))
    .attr("width", x.bandwidth())
    .attr("height", (d: any) => this.height - y(d.highPercent))
    .attr("fill", "#2dba88");
  }
}
