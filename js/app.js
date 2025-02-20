(function (win, doc) {
  "use strict";
  let $getUsername = doc.querySelector('[data-js="username"]');
  let $statusChecked = doc.querySelector('[data-js="save"]');
  let $restoreUsername = win.localStorage.getItem("userIFPR");

  function removeSpace(value) {
    return value.replace(/^\s+|\s+$/g, "");
  }

  function restoreDataUser() {
    if ($restoreUsername) {
      $getUsername.value = $restoreUsername;
      $statusChecked.checked = true;
    }
  }
  win.addEventListener("load", restoreDataUser);

  function saveAndDeleteUsername() {
    if ($statusChecked.checked) {
      $getUsername.value
        ? win.localStorage.setItem("userIFPR", "")
        : win.localStorage.setItem("userIFPR", removeSpace($getUsername.value));
    } else {
      $getUsername.value = "";
      $statusChecked.checked = false;
      win.localStorage.removeItem("userIFPR");
    }
  }
  $statusChecked.addEventListener("click", saveAndDeleteUsername);

  function updateUsername() {
    if ($statusChecked.checked) {
      win.localStorage.setItem("userIFPR", removeSpace($getUsername.value));
      $getUsername.value = win.localStorage.getItem("userIFPR");
    } else {
      $getUsername.value = removeSpace($getUsername.value);
    }
  }
  $getUsername.addEventListener("change", updateUsername);
})(window, document);
