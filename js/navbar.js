function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    var icon = submenu.previousElementSibling.querySelector('i.fa-angle-down');

    if (submenu.style.display === 'none') {
      submenu.style.display = 'block';
      icon.classList.remove('fa-angle-down');
      icon.classList.add('fa-angle-up');
    } else {
      submenu.style.display = 'none';
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
    }
  }