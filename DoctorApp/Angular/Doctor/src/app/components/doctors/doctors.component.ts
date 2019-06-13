import { Component, OnInit } from '@angular/core';
import { DoctorService} from '../../services/doctor.service';
import { Doctor } from '../../models/Models';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  providers: [DoctorService]
})

export class DoctorsComponent implements OnInit {

  doctors: Doctor[];
  constructor(private srv: DoctorService) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors(){
      this.srv.getDoctors().subscribe(r =>
        {         
          this.doctors = r;
         }
        );
  }

}
