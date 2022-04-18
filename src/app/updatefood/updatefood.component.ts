import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddminfoodService } from '../addminfood.service';

import { Adminfood } from '../adminfood';

@Component({
  selector: 'app-updatefood',
  templateUrl: './updatefood.component.html',
  styleUrls: ['./updatefood.component.css']
})
export class UpdatefoodComponent implements OnInit {
  updatefood: any;
  id!: number;
  user: Adminfood = new Adminfood(); 

  constructor(private formBuilder: FormBuilder,private adminfoodservice:AddminfoodService,
    private route: ActivatedRoute,
    private router: Router) { this.forms();}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.adminfoodservice.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.newforms();
    }, error => console.log(error));
  }
  forms()
  {
    this.updatefood = this.formBuilder.group({
     // foodname:['',[Validators.required]],
      imageurl:['',[Validators.required]],
    //  category:['',[Validators.required]],
      price:['',[Validators.required,Validators.pattern("^[0-9.]*")]],
    })
  }
newforms()
{
  this.updatefood = this.formBuilder.group({
  //  foodname:[this.user.foodname,[Validators.required]],
    imageurl:[this.user.imageurl,[Validators.required]],
   // category:['',[Validators.required]],
    price:[this.user.price,[Validators.required,Validators.pattern("^[0-9.]*")]],
  })
}
  update(){
    this.adminfoodservice.updateUser(this.id, this.updatefood.value).subscribe( data =>{
      this.goToUserList();
    },error=>alert("Something went wrong"))
   
  }
  goToUserList(){
    alert("updated successfully");
    this.router.navigate(['/adminfood']);
  }
}
