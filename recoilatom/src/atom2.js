import {atom, selector} from 'recoil';

export const networkfetchatoms=atom({
    key:"Networkk",
    default:selector({
        key:"networkatomselect",
            get: (id) => async ({get}) => {
              await new Promise(r => setTimeout(r, 5000));
              const res = await axios.get("https://sum-server.100xdevs.com/todo?id=${id}");
              return res.data.todo;
            },
          })
    })


export const fetchselector=selector({
    key:"slect",
    get:({get})=>{
        const total=get(networkfetchatoms);
        return total.jobs+total.message+total.network+total.notification;

    }
})


