import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [InputTextModule, SplitButtonModule, ToolbarModule, ButtonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchValue: string = "";

  private searchValueSubject = new BehaviorSubject<string>('');
  search$ = this.searchValueSubject.asObservable();

  onInput() {
    this.searchValueSubject.next(this.searchValue);
  }
}