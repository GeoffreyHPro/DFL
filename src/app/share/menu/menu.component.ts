import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/'])
        }
      },
      {
        label: 'Mes joueurs',
        icon: 'pi pi-users',
        command: () => {
          this.router.navigate(['/players'])
        }
      },
      {
        label: 'Ligue',
        icon: 'pi pi-trophy',
        command: () => {
          this.router.navigate(['/league'])
        }
      },
      {
        label: 'Défis',
        icon: 'pi pi-clipboard',
        command: () => {
          this.router.navigate(['/challenges'])
        }
      },
      {
        label: 'Boutique',
        icon: 'pi pi-shop',
        command: () => {
        }
      },
    ]
  }
}