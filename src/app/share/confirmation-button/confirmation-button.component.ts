import { Component, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-confirmation-button',
  standalone: true,
  imports: [ToastModule, ConfirmDialogModule, ButtonModule],
  templateUrl: './confirmation-button.component.html',
  styleUrl: './confirmation-button.component.css'
})
export class ConfirmationButtonComponent {
  @Input() headerMessage: string = "";

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

  Confirm() {
    this.confirmationService.confirm({
      message: 'Voulez-vous vraiment supprimer cet élément ?',
      header: this.headerMessage,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Supprimé',
          detail: 'L\'élément a été supprimé.'
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Annulé',
          detail: 'Suppression annulée.'
        });
      }
    });
  }
}