import { FormBuilder } from '@angular/forms';
import { VoteComponent } from './event-emitter';
import { ToDoFormComponent } from "./to-do-form.component";

describe('ToDoFormComponent', () =>{
    let component: VoteComponent;
    beforeEach(()=>{
        component = new VoteComponent();
    })
    it('should change the value when event raise', () =>{
        let totalVotes = null;
        // component.voteChanged.listeners((tv: string) => totalVotes = tv)
        component.upVote();
        expect(totalVotes).not.toBe(null);
    });
  
});