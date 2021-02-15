import { Observable } from 'rxjs/Observable';
import { ToDoComponent } from './to-do-service.component';
import { ToDoService } from './todo-service';
import 'rxjs/add/observable/from'
import { providerListMock } from './mock';
describe('ToDoFormComponent', () =>{
    let component: ToDoComponent;
    let service: ToDoService;
    beforeEach(()=>{
        service = new ToDoService(null);
        component = new ToDoComponent(service);
    })
    it('set to do property when item return a server', () =>{
        spyOn(service, 'getProviderList').and.callFake(() =>{
            return Observable.from([providerListMock])
        });
    });
    component.ngOnInit();
    expect(component.toDo.length).toBeGreaterThan(0);
  
});