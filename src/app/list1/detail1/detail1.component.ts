import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.component.html',
  styleUrls: ['./detail1.component.css']
})
export class Detail1Component implements OnInit {
  detail1: any;
  list2: any[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  ca: any[] = [];
  ebitda: any[] = [];
  loss: any[] = [];
  margin: any[] = [];
  chartCa: any;
  chartEbitda: any;
  chartLoss: any;
  chartMargin: any;
  year: any[] = []
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.getDetail1(id);

  }
  getChartCa() {
    this.chartCa = {
      series: [{
        // name: this.year,
        data: this.ca,
      },],
      xAxis: {
        categories: this.year
      },
      yAxis: {
        title: {
          text: "Chiffres d'affaires",
        },
      },
      chart: {
        type: "column",
      },
      title: {
        text: "Chiffres d'affaires",
      },
    };
  }
  getChartEbitda() {
    this.chartEbitda = {
      series: [{
        // name: this.year,
        data: this.ebitda,
      },],
      xAxis: {
        categories: this.year
      },
      yAxis: {
        title: {
          text: "Chiffres d'affaires",
        },
      },
      chart: {
        type: "column",
      },
      title: {
        text: "Ebitda",
      },
    };
  }
  getChartLoss() {
    this.chartLoss = {
      series: [{
        // name: this.year,
        data: this.loss,
      },],
      xAxis: {
        categories: this.year
      },
      yAxis: {
        title: {
          text: "Chiffres d'affaires",
        },
      },
      chart: {
        type: "column",
      },
      title: {
        text: "Loss",
      },
    };
  }
  getChartMargin() {
    this.chartMargin = {
      series: [{
        // name: this.year,
        data: this.margin,
      },],
      xAxis: {
        categories: this.year
      },
      yAxis: {
        title: {
          text: "Chiffres d'affaires",
        },
      },
      chart: {
        type: "column",
      },
      title: {
        text: "Margin",
      },
    };
  }

  getDetail1(id: number) {
    this.api.getlist2().subscribe(list => {
      console.log(list)
      this.list2 = list.filter((data: any) => {
        return data.business == id
      })
      this.list2.forEach(data => {
        this.ca.push(data.ca)
        this.ebitda.push(data.ebitda)
        this.loss.push(data.loss)
        this.margin.push(data.margin)

        this.year.push(data.year)
      })
      console.log(this.list2)
      this.getChartCa()
      this.getChartEbitda()
      this.getChartLoss()
      this.getChartMargin()
    })
  }
}
