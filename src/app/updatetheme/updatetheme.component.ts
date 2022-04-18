import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddmenuService } from '../addmenu.service';
import { Addtheme } from '../addtheme';

@Component({
  selector: 'app-updatetheme',
  templateUrl: './updatetheme.component.html',
  styleUrls: ['./updatetheme.component.css']
})
export class UpdatethemeComponent implements OnInit {
  themeid!: number;
  user: Addtheme = new Addtheme();
  updatetheme: any;
  constructor(   private route: ActivatedRoute,private addthemeservice:AddmenuService,private  router : Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.themeid = this.route.snapshot.params['themeid'];

    this.addthemeservice.getUserById(this.themeid).subscribe(data => {
      this.user = data;
      this.newforms();
    }, error => console.log(error));
  }

  forms()
  {
    this.updatetheme = this.formBuilder.group({
      photographerDetails:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9,:;/.&' ']*")]],
      videographerDetails:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9,:;/.&' ']*")]],
      returnGift:['',[Validators.required]],
      themeCost:['',[Validators.required,Validators.pattern("^[0-9]*")]],
    })
  }
newforms()
{
  this.updatetheme = this.formBuilder.group({
    photographerDetails:[this.user.photographerDetails,[Validators.required,Validators.pattern("^[a-zA-Z0-9,:;/.&' ']*")]],
    videographerDetails:[this.user.videographerDetails,[Validators.required,Validators.pattern("^[a-zA-Z0-9,:;/.&' ']*")]],
    returnGift:[this.user.returnGift,[Validators.required]],
    themeCost:[this.user.themeCost,[Validators.required,Validators.pattern("^[0-9]*")]],
  })
}

  update(){
    this.addthemeservice.updateUser(this.themeid, this.updatetheme.value).subscribe( data =>{
      this.goToUserList();
    },error=>alert("something went wrong "))
   
  }
  goToUserList(){
    alert("updated successfully");
    this.router.navigate(['/addtheme']);
  }
}
