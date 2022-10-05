
function random(low, high){
    if(high - low < 0){
        high = low;
    }
    let num = low + (Math.random() * (high+1 - low))

    return Math.floor(num);
}

export function generator () {
    let len = 15;

    let pass_string = "";

    for(let i=0;i<len;i++){
        pass_string += String.fromCharCode(random(33,126))
    }
    return pass_string;
}