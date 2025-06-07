import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import * as emojiFlags from 'emoji-flags';

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

  getFlagEmoji(code: string): string {
    const country = emojiFlags.countryCode(code);
    return country ? country.emoji : '';
  }

  getTrophyColor(level: string): string {
    switch (level.toLowerCase()) {
      case 'bronze': return '#cd7f32';
      case 'silver': return '#c0c0c0';
      case 'or': return '#ffd700';
      default: return '#000000';
    }
  }
}