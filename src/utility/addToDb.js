import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('list-item');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return []
    }
}

const addToStoredList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        alert(id, 'Already this id exist')
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('list-item', storedListStr)
        toast('This books id added to the read list')
    }
};

const getAddToWhiteList = () => {
    const storedListStr = localStorage.getItem('list-white');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return []
    }
}

const addToWhiteList = (id) => {
    const storedList = getAddToWhiteList();
    if (storedList.includes(id)) {
        return ('already add')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('list-white', storedListStr);
       
    }
}

export { addToStoredList, addToWhiteList, getStoredReadList }