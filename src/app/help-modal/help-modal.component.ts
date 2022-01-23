import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.component.html',
  styleUrls: ['./help-modal.component.scss'],
})
export class HelpModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
}
}
