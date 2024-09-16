
window.addEventListener("scroll", (event) => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
  });

  const photos = [
    "Assets/BB24Photos/0.jpg",
    "Assets/BB24Photos/1.jpg",
    "Assets/BB24Photos/2.jpg",
    "Assets/BB24Photos/3.jpg",
];

let currentPhotoIndex = 0;

function showPhoto(index) {
    const photoElement = document.getElementById('photo');
    photoElement.src = photos[index];
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
}

function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(currentPhotoIndex);
}

