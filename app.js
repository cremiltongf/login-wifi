// on storage
let userOnStorage = localStorage.userIFPR;
// set username
let setUsername = document.querySelector(".username");
// checked on || off
let setChecked = document.querySelector(".save");
setChecked.checked = false;

if (userOnStorage) {
    setUsername.value = localStorage.userIFPR;
    setChecked.checked = true;
}

function actionSetUsername() {
    if(setChecked.checked){
        if(setUsername.value === ""){
            localStorage.userIFPR = "Undefined";
        }
        else {
            localStorage.userIFPR = setUsername.value;
        }
    } 
    else{
        setUsername.value = "";
        setChecked.checked = false;
        localStorage.removeItem("userIFPR");
    }
}
setChecked.addEventListener("click", actionSetUsername);

function updateUser(e) {
    if(setChecked.checked){
        localStorage.userIFPR = setUsername.value;
    }
}
setUsername.addEventListener("change", updateUser);