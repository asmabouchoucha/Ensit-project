

import { Injectable } from "@angular/core";
import { sessionItems } from "../sessions";
import { Session } from "../session";

@Injectable()
export class SessionItemService {
    sessionItems;
get(index: number) {return sessionItems[index-1];}

add(sessionItem) {
    sessionItem.id=sessionItems.length+1;
    sessionItems.push(sessionItem);
}

edit (index:number, newSession: Session) {
 this.sessionItems[index]=newSession;
}
delete (sessionItem) {
    let index;
    index=sessionItems.indexOf(sessionItem);
    if (sessionItems.indexOf(sessionItem)>=0) {
        sessionItems.splice(index,1);
    }
}

}
