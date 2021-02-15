import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() =>{
    component = new AppComponent();
  })
  it('Should increment total vote when upgraded' , () => {
    component.upVote();
    expect(component.totalVote).toBe(1)
  })

  it('Should decrement total vote when downgraded' , () => {
    component.downVote();
    expect(component.totalVote).toBe(-1)
  })
});
