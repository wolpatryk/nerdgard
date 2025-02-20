// Initialize Materialize components
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  });
  
  // Sidenav
  document.addEventListener("DOMContentLoaded", function () {
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  });
  
  // Scrollspy
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".scrollspy");
    var instances = M.ScrollSpy.init(elems, {});
  });
  
  // Floating action button
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".fixed-action-btn");
    var instances = M.FloatingActionButton.init(elems, {});
  });
  
  // Dropdown
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems, {});
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  });