import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, ChangeDetectorRef, inject, effect, Input, SimpleChanges } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-generic-radar',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './generic-radar.component.html',
  styleUrl: './generic-radar.component.css'
})
export class GenericRadarComponent {
  @Input() dataset: number[] = [];
  @Input() labels: string[] = [];
  @Input() maxValue: number = 0;
  @Input() title: string = "";

  platformId = inject(PLATFORM_ID);
  data: any;
  options: any;

  constructor(private cd: ChangeDetectorRef) { }

  themeEffect = effect(() => {

  });

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dataset.length && this.labels.length) {
      this.initChart();
    }
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

      this.data = {
        labels: this.labels,
        datasets: [
          {
            label: this.title,
            borderColor: documentStyle.getPropertyValue('--p-gray-400'),
            pointBackgroundColor: documentStyle.getPropertyValue('--p-gray-400'),
            pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
            data: this.dataset
          }
        ]
      };

      this.options = {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          r: {
            ticks: {
              display: false
            },
            grid: {
            },
            max: this.maxValue,
          }
        }
      };
    }
    this.cd.markForCheck()
  }
}
