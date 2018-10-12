import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TodoServiceService } from './todo-service.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
