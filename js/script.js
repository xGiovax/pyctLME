// Obtener todas las miniaturas y la imagen principal
const thumbnails = document.querySelectorAll('.thumb');
const mainImage = document.getElementById('main-image');

// Agregar un evento de clic a cada miniatura
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // Cambiar la fuente de la imagen principal a la imagen de la miniatura clickeada
        mainImage.src = thumb.src;
    });
});
