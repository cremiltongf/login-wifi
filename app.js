// get username
let getUsername = document.querySelector(".username");
// checked on || off
let statusChecked = document.querySelector(".save");

// restore username
let restoreUsername = localStorage.userIFPR;
function restoreEvent(){
    if (restoreUsername) {
        getUsername.value = localStorage.userIFPR;
        statusChecked.checked = true;
    }
}
window.addEventListener("load", restoreEvent);

// save and remove username
function actiongetUsername() {
    if(statusChecked.checked){
        if(getUsername.value === ""){
            localStorage.userIFPR = "Undefined";
        }
        else {
            localStorage.userIFPR = getUsername.value;
        }
    } 
    else{
        getUsername.value = "";
        statusChecked.checked = false;
        localStorage.removeItem("userIFPR");
    }
}
statusChecked.addEventListener("click", actiongetUsername);

// update username
function updateUser(e) {
    if(statusChecked.checked){
        localStorage.userIFPR = getUsername.value;
    }
}
getUsername.addEventListener("change", updateUser);