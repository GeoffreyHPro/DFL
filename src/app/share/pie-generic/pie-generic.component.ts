import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, Input, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-pie-generic',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './pie-generic.component.html',
  styleUrl: './pie-generic.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PieGenericComponent {
  @Input() dataset: number[] = [];
  @Input() labels: string[] = [];
  @Input() colors: string[] = [];

  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) { }

  themeEffect = effect(() => {

  });

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');

      this.data = {
        labels: this.labels,
        datasets: [
          {
            data: this.dataset,
            backgroundColor: this.colors,
            hoverBackgroundColor: this.colors
          }
        ]
      };

      this.options = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor
            }
          }
        }
      };
      this.cd.markForCheck()
    }

  }
}
