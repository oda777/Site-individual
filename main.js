document.querySelectorAll('section').forEach(function(section) {
    section.addEventListener('click', function() {
      
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        section.style.backgroundColor = randomColor;
    });
});
