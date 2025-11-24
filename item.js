function shopNow(){
    document.getElementById("box").style.display = "block";
}

function closeBox(){
    document.getElementById("box").style.display = "none";
}

function pop(){
    var getSelectedValue = document.querySelector('input[name="depi"]:checked');
    var item = document.getElementById("item").innerHTML;
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let address = document.querySelector('#address');
    let phone = document.querySelector('#phone');
    let details = document.querySelector('#details');

    if(getSelectedValue == null){
        document.getElementById("box").style.display = "block";
        document.getElementById("error").innerHTML = "Please Select one method";

    }   else {
        document.getElementById("box").style.display = "none";
        alert(`You have purchased the ${item}. Thank you For your purchase!!`);

    }

    if(name.value === ""){
        document.getElementById("box").style.display = "block";
        name.style.border = '#f50c0ca2 1px solid';

    }else{name.style.border = '#000 1px solid';}
    if(email.value === ""){
        document.getElementById("box").style.display = "block";
        email.style.border = '#f50c0ca2 1px solid';
    }else{email.style.border = '#000 1px solid';}
    if(phone.value === ""){
        document.getElementById("box").style.display = "block";
        phone.style.border = '#f50c0ca2 1px solid';
    }else{phone.style.border = '#000 1px solid';}
    if(address.value === ""){
        document.getElementById("box").style.display = "block";
        address.style.border = '#f50c0ca2 1px solid';
    }else{address.style.border = '#000 1px solid';}
    if(details.value === ""){
        document.getElementById("box").style.display = "block";
        details.style.border = '#f50c0ca2 1px solid';
    }else{details.style.border = '#000 1px solid';}

}