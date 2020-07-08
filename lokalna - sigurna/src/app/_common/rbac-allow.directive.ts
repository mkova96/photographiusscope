import { Directive, OnDestroy, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { User } from '../_models/user';
import { Subscription } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import * as _ from 'lodash';


@Directive({
    selector:"[rbacAllow]"
})
export class RbacAllowDirective implements OnDestroy {

    allowedRole:string;
    user:User;

    sub:Subscription;

    constructor(private templateRef: TemplateRef<any>,private viewContainer: ViewContainerRef,
        private authService: AuthService) {

        this.sub = authService.user$.subscribe(
            user => {
                this.user = user;
                this.showIfUserAllowed();
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    @Input()
    set rbacAllow(allowedRole: string) {
        this.allowedRole = allowedRole;
        this.showIfUserAllowed();
    }

    showIfUserAllowed() {

        if (!this.allowedRole || !this.user) {
            this.viewContainer.clear();
            return;
        }

        if (this.allowedRole == this.user.role) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }

    }

}