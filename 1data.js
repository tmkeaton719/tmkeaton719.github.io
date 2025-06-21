var Passwords = {
    ashley : "Psalms91",
    megan : "Psalms91",
    cami : "Psalms91"
};

function validateMeganPassword(text){
    let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password");
            document.location = 'megan.html';
        } else if (attempt != Passwords.megan){
            alert("Wrong password");
            document.location = 'megan.html';
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1Iwzj8k8pwRUDeZ3BO8h4hPGgtrILr-5GzicZsgBuiTw/edit?usp=sharing");
            document.location = 'megan.html';
        }
}
function validateCamiPassword(text){
    let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password");
            document.location = 'cami.html';
        } else if (attempt != Passwords.cami){
            alert("Wrong password");
            document.location = 'cami.html';
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1yzEIsGuOOgCS4Wd_MIn7N3sOuFbcNGof17Fu5BBA_wU/edit?usp=sharing");
            document.location = 'cami.html';
        }
}

function validateAshleyPassword(text) {
        let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password");
            document.location = 'ashley.html';
        } else if (attempt != Passwords.ashley){
            alert("Wrong password");
            document.location = 'ashley.html';
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1EG6ha-06HuXU-teoL7Nbt3wkV6G-fB9JFWbjx6qqAsQ/edit?usp=sharing");
            document.location = 'ashley.html';
        }
    }

