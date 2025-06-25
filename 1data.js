function _0x2f20(_0x253435,_0x777e7f){var _0x5e6353=_0x5e63();return _0x2f20=function(_0x2f20f1,_0x505a8a){_0x2f20f1=_0x2f20f1-0x174;var _0x2a277c=_0x5e6353[_0x2f20f1];return _0x2a277c;},_0x2f20(_0x253435,_0x777e7f);}var _0x3b9762=_0x2f20;(function(_0x42711c,_0x3b8dcf){var _0x3d3603=_0x2f20,_0x37fcb9=_0x42711c();while(!![]){try{var _0x8aece2=-parseInt(_0x3d3603(0x17d))/0x1*(-parseInt(_0x3d3603(0x17c))/0x2)+-parseInt(_0x3d3603(0x177))/0x3+-parseInt(_0x3d3603(0x17b))/0x4*(-parseInt(_0x3d3603(0x174))/0x5)+-parseInt(_0x3d3603(0x17a))/0x6+-parseInt(_0x3d3603(0x175))/0x7+-parseInt(_0x3d3603(0x179))/0x8+parseInt(_0x3d3603(0x178))/0x9;if(_0x8aece2===_0x3b8dcf)break;else _0x37fcb9['push'](_0x37fcb9['shift']());}catch(_0x12d0e1){_0x37fcb9['push'](_0x37fcb9['shift']());}}}(_0x5e63,0xd9591));var Passwords={'ashley':'Psalms91','megan':_0x3b9762(0x176),'cami':_0x3b9762(0x176)};function _0x5e63(){var _0x15bfcc=['8TmqYkK','130589UDnAzO','18280QNGVYv','9669233pPVXLT','Psalms91','357672CAJIJY','16434972ApRiUa','12027984tYiswY','749748vpSLJe','1828zukQMj'];_0x5e63=function(){return _0x15bfcc;};return _0x5e63();}

function validateMeganPassword(text){
    let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password");
        } else if (attempt != Passwords.megan){
            alert("Wrong password");
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1Iwzj8k8pwRUDeZ3BO8h4hPGgtrILr-5GzicZsgBuiTw/edit?usp=sharing");
        }
}
function validateCamiPassword(text){
    let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password");
        } else if (attempt != Passwords.cami){
            alert("Wrong password");
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1yzEIsGuOOgCS4Wd_MIn7N3sOuFbcNGof17Fu5BBA_wU/edit?usp=sharing");
        }
}

function validateAshleyPassword(text) {
        let attempt = text.password.value
        if (attempt == ""){
            alert("Please enter password");
        } else if (attempt != Passwords.ashley){
            alert("Wrong password");
            return false;
        } else {
            return window.open("https://docs.google.com/spreadsheets/d/1EG6ha-06HuXU-teoL7Nbt3wkV6G-fB9JFWbjx6qqAsQ/edit?usp=sharing");
        }
    }