import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req-response.interfaces';
import { switchMap } from 'rxjs';
import { UserService } from '../../../services/user.service';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UserService);
  //public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );

  constructor() {
    /* this.route.params.subscribe((params) => {
      console.log(params);
    }); */
  }
}
