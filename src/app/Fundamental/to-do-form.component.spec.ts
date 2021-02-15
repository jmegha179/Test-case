import { FormBuilder } from '@angular/forms';
import { ToDoFormComponent } from "./to-do-form.component";

describe('ToDoFormComponent', () =>{
    let component: ToDoFormComponent;
    beforeEach(()=>{
        component = new ToDoFormComponent(new FormBuilder());
    })
    it('form should create a form with two controls', () =>{
        expect(component.formGroup.contains('name')).toBeTruthy();
        expect(component.formGroup.contains('email')).toBeTruthy();
    });
    it('should make name as a required feid', () =>{
        let control = component.formGroup.get('name');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
});