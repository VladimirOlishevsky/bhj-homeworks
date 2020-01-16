let editor = document.getElementById('editor');

// if (localStorage.getItem('area') != null)
//     editor.value = localStorage.getItem('area');
editor.addEventListener('input', function() {

    localStorage.clear()
    editor.value = localStorage.getItem('area');
    return localStorage.setItem('area', this.value);
});