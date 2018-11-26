import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-form"',
    templateUrl: ''
})


export class FormComponent implements OnInit{
    customerForm: FormGroup;
    customer: Customer = new Customer();

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        // Using Form builder
        this.customerForm = this.fb.group({
            firstName = [];
            lastName = [];
        });
        // Witout use formbuuilder
        /*this.customerForm = new FormGroup({
            firstName = new FormControl();
            lastName = new FormControl();
        });*/
    }

    populateData(): void {
        // use to set all value of the form
        this.customerForm.setValue({
            firstName:"John",
            lastName: "Semeur"
        });

        // use to set just some values of the form
       /* this.customerForm.patchValue({
            firstName:"John",
            lastName: "Semeur"
        });*/
    }
}