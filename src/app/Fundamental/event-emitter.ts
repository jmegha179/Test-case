import { Output } from '@angular/core';
import { EventEmitter } from 'protractor';

export class VoteComponent{
    totalVotes: any = 0;
    voteChanged = new EventEmitter();

    upVote(){
        this.totalVotes++;
        this.voteChanged.emit(this.totalVotes);
    }
}