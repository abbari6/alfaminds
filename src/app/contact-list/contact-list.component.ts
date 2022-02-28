import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { map, filter, switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
contacts: any;
listData: MatTableDataSource<any>;
displayedColumns: string[] = ['id','firstname', 'lastname','email','company','actions'];
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator
  constructor( private auth:AuthService ) { }

  ngOnInit(): void {
    this.auth.contactUsers().subscribe((data:any)=>{
      console.log(data);
      this.contacts= data;
    this.listData = new MatTableDataSource(this.contacts);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    })
  }

}
