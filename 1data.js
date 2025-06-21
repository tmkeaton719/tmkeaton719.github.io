var Passwords = {
    ashley : "cheese",
    megan : "SophiaGraceK1",
    cami : "password"
};

function validateMeganPassword(text){
    let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password")
        } else if (attempt != Passwords.megan){
            alert("Wrong password");
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1EG6ha-06HuXU-teoL7Nbt3wkV6G-fB9JFWbjx6qqAsQ/edit?usp=sharing");
        }
}
function validateCamiPassword(text){
    let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password")
        } else if (attempt != Passwords.cami){
            alert("Wrong password");
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1EG6ha-06HuXU-teoL7Nbt3wkV6G-fB9JFWbjx6qqAsQ/edit?usp=sharing");
        }
}

function validateAshleyPassword(text) {
        let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password")
        } else if (attempt != Passwords.ashley){
            alert("Wrong password");
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1EG6ha-06HuXU-teoL7Nbt3wkV6G-fB9JFWbjx6qqAsQ/edit?usp=sharing");
        }
    }

