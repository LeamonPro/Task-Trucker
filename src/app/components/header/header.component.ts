import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:String = "Task Trucker"
  showAddTask!:boolean;
  subscription!:Subscription;

  constructor(private uiService : UiService){
    this.subscription=this.uiService.onToggle().subscribe((but)=>{
        this.showAddTask=but; 
    })

  }


  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
