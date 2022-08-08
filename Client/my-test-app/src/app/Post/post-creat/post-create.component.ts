import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    text = "";
    username: string = "";
    password: string = "";
    onAddPost(){
        this.username = this.username;
        this.password = this.password;

        this.text = `${this.username} \n ${this.password}`;
    }
}
