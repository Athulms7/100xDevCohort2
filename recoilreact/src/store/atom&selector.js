import{atom, selector} from 'recoil';

export const counterAtom=atom({
    default:0,
    key:"counter"
})

export const evenSelector=selector({
    key:"isEvenselector",
    get:function({get}){
        const   currentCount=get(counterAtom);
        const iseven=(currentCount%2==0);
        return iseven;
    }
})
//Atoms represent units of state, while selectors derive
//  new state based on other atoms or selectors. 
// Essentially, atoms are the basic building blocks,
//  and selectors are functions that compute derived data from those blocks. 