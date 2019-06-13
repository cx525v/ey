import { Component, OnInit } from '@angular/core';
import { DoctorService} from '../../services/doctor.service';
import { Doctor } from '../../models/Models';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers: [DoctorService]
})
export class DoctorComponent implements OnInit { 
  doctor: Doctor;
  constructor(private srv: DoctorService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      let Id: number = params["id"];
      this.getDoctorDetails(Id);
    });
  
  }

  getDoctorDetails(Id: number){
    this.srv.getDoctorDetails(Id).subscribe(r =>
      {         
        this.doctor = r;
       }
      );
  }
}
