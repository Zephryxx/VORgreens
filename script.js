var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

const form = document.getElementById('form')
const username = document.getElementById('name')
const email = document.getElementById('email')
const age = document.getElementById('age')
const gend1 = document.getElementById('dot-1')
const gend2 = document.getElementById('dot-2')
const gend3 = document.getElementById('dot-3')
const msg = document.getElementById('message')
const subs = document.getElementById('subscribe')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    var flag1=0, flag2=0, flag3=0, flag4=0, flag5=0;
    var finalFlag = 0;
    const usernameValue = username.value
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const msgValue = msg.value;

    //validating name
    if(usernameValue === ''){
        setErrorFor(username, 'Nama harus diisi');
        flag1 = 1;
    } else if(usernameValue.length < 5 || usernameValue.length > 20){
            setErrorFor(username, 'Nama harus memiliki 5-20 karakter')
            flag1 = 1;
    } else{
        setSuccessFor(username);
        flag1 = 0;
    }

    //validating email
    if(emailValue === ''){
        setErrorFor(email, 'Email harus diisi');
        flag2 = 1;
    } else if(!emailValue.endsWith("@gmail.com")){
        setErrorFor(email, 'email harus berakhir dengan @gmail.com');
        flag2 = 1;
    } else{
        setSuccessFor(email);
        flag2 = 0;
    }

    //validating age
    if(ageValue === ''){
        setErrorFor(age, 'Umur harus diisi');
        flag3 = 1;
    }else if(ageValue < 1 || ageValue > 100){
        setErrorFor(age, 'Mohon masukkan usia yang valid');
        flag3 = 1;
    }else{
        setSuccessFor(age);
        flag3 = 0;
    }

    //validating gender
    if(gend1.checked == false && gend2.checked == false && gend3.checked == false){
        const formControl = gend1.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = 'Mohon pilih salah satu';
        formControl.className = 'gender-details error';
        flag4 = 1;
    }else{
        const formControl = gend1.parentElement;
        formControl.className = 'gender-details success';
        flag4 = 0;
    }

    //validating message
    if(msgValue === ''){
        setErrorFor(msg, 'Pesan harus diisi');
        flag5 = 1;
    }else if(msgValue.length > 500){
        setErrorFor(msg, 'Pesan terlalu panjang');
        flag5 = 1;
    }else{
        setSuccessFor(msg);
        flag5 = 0;
    }

    //validatin subscribe
    if(subs.checked == false){
        const formControl = subs.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = 'Mohon berlangganan terlebih dulu';
        formControl.className = 'check-box error';
        finalFlag = 1;
    }else{
        const formControl = subs.parentElement;
        formControl.className = 'check-box success';
        finalFlag = 0;
    }

    if(flag1 == 1 || flag2 == 1 || flag3 == 1 || flag4 == 1 || flag5 == 1 || finalFlag == 1){
        alert("Ada kesalahan pengisian form");
    }else{
        alert("Pengisian form berhasil!");
        location.href="homepage.html";
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'input-box error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'input-box success';
}