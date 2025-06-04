import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent {
  @Input() labels: any[] = [];
  @Input() values: any[] = [];
  @Input() actionHandler: (id: string) => void = () => { };
}