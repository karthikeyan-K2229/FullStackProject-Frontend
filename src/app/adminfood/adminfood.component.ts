import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddminfoodService } from '../addminfood.service';
import { Adminfood } from '../adminfood';

@Component({
  selector: 'app-adminfood',
  templateUrl: './adminfood.component.html',
  styleUrls: ['./adminfood.component.css']
})
export class AdminfoodComponent implements OnInit {
  Addsfood: any;
  users!: Adminfood[] ;
  

  constructor(private router: Router,private formBuilder: FormBuilder,private adminfoodservice:AddminfoodService) {this.forms(); }

  ngOnInit(): void { this.getUsers();
  }
  forms()
  {
    this.Addsfood = this.formBuilder.group({
      foodname:['',[Validators.required,Validators.pattern("^[a-zA-Z-]*")]],
      //['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      imageurl:['',[Validators.required]],
      category:['',[Validators.required]],
      price:['',[Validators.required,Validators.pattern("^[0-9.]*")]],
    })
  }
  AddTheme()
  {
    console.log(this.Addsfood.value);
    this.adminfoodservice.Addingtheme(this.Addsfood.value).subscribe(data=>{
      alert("Food Added Successfully")
      this.getUsers();
    
  },error=>alert("Food name already exits "));
    }

    private getUsers(){
      this.adminfoodservice.getUsersList().subscribe(data =>{
        this.users=data;
      })
    }
    deleteUser(id:number){
      this.adminfoodservice.deleteUser(id).subscribe(data=>{
        console.log(data);
        alert("deleted successfully");
        this.getUsers();
      })
    }
    updateUser(id: number){
      this.router.navigate(['updatefood',id])
    }
  
}
