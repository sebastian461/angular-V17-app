import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2" />
    <section class="flex justify-end">
      <img
        srcset="http://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: perro1;"
      />

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: caja1;"
      ></div>
    </section>
  `,
  styles: ``,
})
export default class ViewTransitionComponent {}
