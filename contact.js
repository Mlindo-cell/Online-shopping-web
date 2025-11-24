const validate = () => {
    let active = document.activeElement;
    let name = document.querySelector('#name');
    let subject = document.querySelector('#subject');
    let number = document.querySelector('#number');
    let message = document.querySelector('#message');
    let err = ""

    if(name.value === ""){
            name.style.border = '#f50c0ca2 1px solid';
            err += 'empty';
    }else{name.style.border = '#000 1px solid';}

    if(subject.value === ""){
            subject.style.border = '#f50c0ca2 1px solid';
            err += 'empty';
    }else{email.style.border = '#000 1px solid';}

    if(number.value === ""){
            number.style.border = '#f50c0ca2 1px solid';
            err += 'empty';
    }else{number.style.border = '#000 1px solid';}

    if(message.value === ""){
            message.style.border = '#f50c0ca2 1px solid';
            err += 'empty';
    }else{message.style.border = '#000 1px solid';}

    if(err != ""){
        return false
    }

}