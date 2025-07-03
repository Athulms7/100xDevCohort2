import {atom, selector} from 'recoil';

export const networkatoms=atom({
    key:"Network",
    default:102
})
export const jobatoms=atom({
    key:"jobs",
    default:0
})
export const messageatoms=atom({
    key:"message",
    default:0
})
export const notificationatoms=atom({
    key:"notification",
    default:12
})

export const totalselector=selector({
    key:"selector",
    get:({get})=>{
    const netcount=get(networkatoms);
    const jobcount=get(jobatoms);
    const notificationcount=get(notificationatoms);
    const messagcount=get(messageatoms);
    return netcount+jobcount+notificationcount+messagcount;
    }
})