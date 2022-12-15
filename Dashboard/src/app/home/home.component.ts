import { Produto } from './../models/produto.model';
import { ProdutoService } from './../services/produto/produto.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto'
import { Observable } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;
  @ViewChild('doughnutCanvas') doughnutCanvas!: { nativeElement: any };
  @ViewChild('doughnutCanvas1') doughnutCanvas1!: { nativeElement: any };
  @ViewChild('lineCanvas') lineCanvas: ElementRef | undefined;
  @ViewChild('lineCanvas1') lineCanvas1: ElementRef | undefined;
  produto?: Produto[];
  produtoQuantidade: any;
  doughnutChart: any;
  doughnutChart1: any;
  lineChart: any;
  lineChart1: any;
  barChart: any;
  canvas: any;
  ctx: any;

  constructor(private serviceProduto: ProdutoService) { }


  ngAfterViewInit(): void {
    this.doughnutBrowser();
    this.lineChartMethod();
    this.barChartMethod();
    this.lineChartMethod1();
    this.produtoGetAll();
  }

  produtoGetAll() {
    const initialValue = 0;
    this.serviceProduto.getListProduto().subscribe({
      next: (data) => {
        this.produto = data;
        this.produtoQuantidade = this.produto.map(prod => prod.quantidade_produto)
          .reduce(
            (soma: any, i) => {
              if (i != null) {
                return soma + i;
              }
            });
        this.doughnutBrowser1(this.produtoQuantidade);
      },
      error: (e) => {
        console.error(e)
        this.doughnutBrowser1(0);
      }

    });
  }

  doughnutBrowser() {
    this.canvas = this.doughnutCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.doughnutChart = new Chart(this.ctx, {
      type: 'doughnut',
      options: {
        plugins: {
          legend: {
            display: false,

          }
        },
      },
      data: {
        datasets: [
          {
            borderColor: [
              'transparent'
            ],
            backgroundColor: [

              '#316C58',
              '#2D4F4E',
              '#29C770',
            ],

            data: [1002, 5000, 3000],
          },
        ],
        labels: [
          'Lucro bruto',
          'Lucro liquido',
          'Despesas'
        ],
      },
    });
  }

  doughnutBrowser1(prodCount: any) {
    this.canvas = this.doughnutCanvas1.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.doughnutChart1 = new Chart(this.ctx, {
      type: 'doughnut',
      options: {
        rotation: -90,
        circumference: 180,
        plugins: {
          legend: {
            display: false,
          }
        },
      },
      data: {
        datasets: [
          {
            borderColor: [
              'transparent'
            ],
            backgroundColor: [
              '#E55356',
              '#119FB7',
              '#665dd1'
            ],
            data: [1000, 1000, prodCount],
          },
        ],
        labels: [
          'Clientes',
          'Funcionários',
          'Produtos'
        ],
      },
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Sell per week',
            //  lineTension: 0.2,
            fill: true,
            backgroundColor: 'rgba(28,179,204, 0.7)',
            borderColor: 'rgb(28,179,204)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(28,179,204)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(28,179,204)',
            pointHoverBorderColor: 'rgb(28,179,204)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          },
        ],
      },
    });
  }

  lineChartMethod1() {
    this.lineChart1 = new Chart(this.lineCanvas1?.nativeElement, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Sell per week',
            fill: true,
            backgroundColor: 'rgba(96,88,195, 0.5)',
            borderColor: 'rgb(96,88,195)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(96,88,195)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(96,88,195)',
            pointHoverBorderColor: 'rgb(96,88,195)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          },
        ],
      },
    });
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [
          {
            label: '# of Votes',
            data: [200, 50, 30, 15, 20, 34],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}


// rgb(96,88,195) color line
// '#29C770', custos
// '#316C58', lucro bruto
// '#2D4F4E', lucro liquido
