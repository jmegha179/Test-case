import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class ToDoFormComponent{
    formGroup: FormGroup;
    constructor(private fb: FormBuilder) {
     this.formGroup = fb.group({
        name : ['', Validators.required],
        email: ['']
     })
    }
}