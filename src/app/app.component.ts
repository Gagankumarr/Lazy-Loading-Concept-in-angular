import { Component,ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyLoading';
  constructor(private vCr:ViewContainerRef,
    private cFr:ComponentFactoryResolver){}
    async loadadmin()
    {
        this.vCr.clear();
        const {AdminListComponent} = await import ('./admin-list/admin-list.component');
        this.vCr.createComponent(
          this.cFr.resolveComponentFactory(AdminListComponent)
        )
    }
    async loaduser()
    {
        this.vCr.clear();
        const {UserListComponent} = await import ('./user-list/user-list.component');
        this.vCr.createComponent(
          this.cFr.resolveComponentFactory(UserListComponent)
        )
    }
}
