(function( win, doc ) {
  'use strict';
  let $getUsername = doc.querySelector( '[data-js="username"]' );
  let $statusChecked = doc.querySelector( '[data-js="save"]' );
  let restoreUsername = localStorage.userIFPR;

  function removeSpace( value ) {
    return value.replace(/^\s+|\s+$/g, '');
  }

  function restoreDataUser() {
    if ( restoreUsername ) {
      $getUsername.value = localStorage.userIFPR;
      $statusChecked.checked = true;
    }
  }
  win.addEventListener( 'load', restoreDataUser );

  function saveAndDeleteUsername() {
    if( $statusChecked.checked ) {
      $getUsername.value === '' ? localStorage.userIFPR = 'Undefined' : localStorage.userIFPR = removeSpace( $getUsername.value );
    } else {
      $getUsername.value = '';
      $statusChecked.checked = false;
      localStorage.removeItem( 'userIFPR' );
    }
  }
  $statusChecked.addEventListener( 'click', saveAndDeleteUsername );

  function updateUser() {
    if( $statusChecked.checked ) {
      localStorage.userIFPR = removeSpace( $getUsername.value );
      $getUsername.value = localStorage.userIFPR;
    } else {
      $getUsername.value = removeSpace( $getUsername.value );
    }
  }
  $getUsername.addEventListener( 'change', updateUser );

})( window, document );
