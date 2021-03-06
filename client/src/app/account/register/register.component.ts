import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IInterest } from 'src/app/shared/models/interest';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: string[];
  ageRangeArray: string[] = ['10-20','20-30', '30-40', '40-50', '50-60', '60-70', '70+'];
  covidVaxArray: string[] = ['Yes', 'No', 'Rather not say'];
  interests: IInterest[];
  selectedInterests: IInterest[] = [];
  dropdownSettings: IDropdownSettings;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.getInterests();
    this.createRegisterForm();
  }

  onItemSelect(item: any) {
    this.selectedInterests.push(item)
  }
  onSelectAll(items: any) {
    this.selectedInterests.push(...items)
  }

  formatThumbLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      displayName: [null, [Validators.required]],
      phoneNumber: [null],
      email: [null, 
        [Validators.required, Validators
        .pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
        [this.validateEmailNotTaken()]
      ],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      experience: [null],
      mobility: [null],
      allergies: [null],
      cprCertified: [null],
      ageRange: [null, Validators.required],
      covidVax: [null, null],
      interests: [this.selectedInterests, Validators.required],
    },
    {
      validator: this.ConfirmPasswordValidator("password", "confirmPassword")
    });
  }

  ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmPasswordValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    console.log("age", this.ageRangeArray);
    console.log("vax", this.covidVaxArray);
    console.log("interests", this.selectedInterests);
    console.log("form", this.registerForm.value);
    // this.accountService.register(this.registerForm.value).subscribe(response => {
    //   this.router.navigateByUrl('/shop');
    // }, error => {
    //   console.log(error);
    //   this.errors = error.errors;
    // })
  }

  validateEmailNotTaken(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.accountService.checkEmailExists(control.value).pipe(
            map(res => {
               return res ? {emailExists: true} : null;
            })
          );
        })
      )
    }
  }

  getInterests() {
    this.accountService.getInterests().subscribe(response => {
      this.interests = response;
    }, error => {
      console.log(error);
      this.errors = error.errors;
    })
  }

}