import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent {
  public userService = inject(UserService);
}
