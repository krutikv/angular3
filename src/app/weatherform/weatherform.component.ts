import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { datapassingservice } from '../datapassing.service';
@Component({
  selector: 'weatherform-root',
  templateUrl: './weatherform.component.html',
  //styleUrls: ['./weatherform.component.css']
})
export class weatherformComponent {
    location:string=''
    details:any
    suggestion:boolean=false
    errormsg:boolean=false;
    errormsg1:boolean=false;
    visible:boolean=false;
    constructor(private datapassingservice:datapassingservice){}
    sendlocation(){
       this.datapassingservice.passdetails(this.location).subscribe(data =>{
        this.details=data;
        console.log(this.details);
        if(this.details.error){
          if(this.details.error.type == 'request_failed'){
            this.errormsg1=true;
            this.visible=false;
            this.errormsg=false;
            this.suggestion=false;
          }else{
          this.visible=false;
          this.errormsg=true;
          this.suggestion=false;
          this.errormsg1=false;}
        }else{
          this.visible=true;
          this.errormsg=false;
          this.suggestion=false;
          this.errormsg1=false;
        }
       if(this.location != this.details.location.name.toLowerCase()){
        this.suggestion=true
       }
      });
    }
}
