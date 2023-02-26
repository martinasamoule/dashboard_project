import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss']
})
export class MainlayoutComponent implements OnInit {
  contactUsForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private FormBuild: FormBuilder, 
    private userMessageSnackBar: MatSnackBar
    ) {  this.contactUsForm = FormBuild.group({
      email: ['', [Validators.required]],
      name: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required]],
      subject: ['',[Validators.required]],
      messageContent: ['',[Validators.required]],
    });}

  ngOnInit(): void {
  }
  get Email(){
    return this.contactUsForm.get('email');
  }
  get Name(){
    return this.contactUsForm.get('name');
  }
  get MobileNumber(){
    return this.contactUsForm.get('mobileNumber');
  }
  get Subject(){
    return this.contactUsForm.get('subject');
  }
  get MessageContent(){
    return this.contactUsForm.get('messageContent');
  }
  SubmitForm(){
    this.openSnackBar('Thank you ... we will contact soon')
  }
  toggle(){ 
  document.getElementsByClassName("navslide")[0].classList.toggle("navslide2");
  }
  openSnackBar(snackBarMessage:string) {
    this.userMessageSnackBar.open(snackBarMessage ,"" ,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5* 1000,
      panelClass:["mt-5","fs-6","fw-bold"]
    });
  }

}
