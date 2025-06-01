import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from '../../share/menu/menu.component';
import { ChartModule } from 'primeng/chart';
import { PieGenericComponent } from '../../share/pie-generic/pie-generic.component';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ToastModule, ConfirmDialogModule, ButtonModule, MenuComponent, ChartModule, PieGenericComponent, PanelModule],
  providers: [PieGenericComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
