"use strict";

function displayNavbar() {
  $('#navbar-icon-open').click(function () {
    $('.navbar-container').css('transform', 'translateX(0%)');
  });
  $('#navbar-icon-close').click(function () {
    $('.navbar-container').css('transform', 'translateX(-100%)');
  });
}

function main() {
  displayNavbar();
}

main();