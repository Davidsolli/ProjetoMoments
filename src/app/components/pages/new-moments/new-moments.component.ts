import { MomentsService } from './../../../services/moments.service';
import { Moments } from './../../../Moments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrl: './new-moments.component.css',
})
export class NewMomentsComponent {
  btnText = 'Compartilhar';

  constructor(private momentsService: MomentsService) {}

  async createHandler(moment: Moments) {
    console.log('Deu certo!');

    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentsService.createMoment(formData).subscribe();
  }
}
