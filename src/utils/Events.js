const events = new Map();

export default {
    $on(eventName, fn){
        if(!events.has(eventName)){
            events.set(eventName, []);
        }
        events.get(eventName).push(fn);       
    },
    $off(eventName, fn){
        throw {message:'Not Implemented'};
    },
    $emit(eventName, data){
        if(events.has(eventName)){
            events.get(eventName).forEach(fn => fn(data));
        }
    }
};