import { Component, OnInit } from '@angular/core';
import { Addtheme } from '../addtheme';
import { Router } from '@angular/router';
import { AddmenuService } from '../addmenu.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-Addtheme',
  templateUrl: './Addtheme.component.html',
  styleUrls: ['./Addtheme.component.css']
})
export class AddthemeComponent implements OnInit {
  addmenu:Addtheme=new Addtheme();
  themes: Addtheme[];
  //formBuilder: any;
  Addstheme: any;
  constructor(private addthemeservice:AddmenuService,private  router : Router,private formBuilder: FormBuilder) { this.forms(); }

  ngOnInit(): void {this.gettheme();
  }
forms()
{
  this.Addstheme = this.formBuilder.group({
    themeName:['',[Validators.required,Validators.pattern("^[a-zA-Z' ']*")]],
    imageUrl:['',[Validators.required]],
    photographerDetails:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9,:;/.&' ']*")]],
    videographerDetails:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9,;:/.&' ']*")]],
    returnGift:['',[Validators.required,Validators.pattern("^[a-zA-Z' '0-9]*")]],
    themeCost:['',[Validators.required,Validators.pattern("^[0-9]*")]],
    themeDiscription:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9' ']*")]]
  })
}
  AddTheme()
  {
    console.log(this.Addstheme.value);
    this.addthemeservice.Addingtheme(this.Addstheme.value).subscribe(data=>{
      alert("Theme Added Successfully")
    this.gettheme();
  },error=>alert("Theme Already exists"));
    }

public gettheme()
    {
  this.addthemeservice.getAllThemes().subscribe(data =>
    {
      this.themes=data;
     // console.log(data);
    })
    }

deleteUser(themeid:number){
  this.addthemeservice.deleteUser(themeid).subscribe(data=>{
    console.log(data);
    alert("deleted successfully");
    this.gettheme();
  })
}
updateUser(themeid: number){
  this.router.navigate(['updatetheme',themeid])
}
}
