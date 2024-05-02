import { Component ,OnInit } from '@angular/core';
//import { MatTableDataSource } from '@angular/material/table'; 


@Component({
  selector: 'app-evt-comp',
  standalone: true,
  imports: [],
  templateUrl: './evt-comp.component.html',
  styleUrl: './evt-comp.component.css'
})
export class EvtCompComponent {


 dataSource =new MatTableDataSource<Event>() 
  AS: any;
ngOnInit(){this.getArticles();} 
getArticles () 
{ 
this.AS.GETALL().subscribe((r: any)=>{ 
this.dataSource =new MatTableDataSource<Event>(r)  
})

}
}
