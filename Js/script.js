window.addEventListener('scroll', function() {
	    var nav = document.getElementById('navbar');
	    var landingPage = document.getElementById('LandingPage');
	    var landingPageTop = landingPage.getBoundingClientRect().top;

	    if (landingPageTop < 50) { // Cambia 50 según sea necesario para ajustar el momento del cambio de color
	        nav.style.background = 'rgba(239, 239, 239, 0.99)';
	         // Cambia el color del nav cuando se pasa la sección LandingPage
	    } else {
	        nav.style.background = 'rgba(255, 255, 255, 0)'; // Cambia el color del nav cuando no se pasa la sección LandingPage
	    }

	    if (landingPageTop >= 0 && landingPageTop < 50) { // Restaura el color original cuando regresa a la sección LandingPage
	        nav.style.background = 'rgba(255, 255, 255, 0)'; // Cambia el color del nav cuando está en la sección LandingPage
	    }
	});

document.getElementById('Menu').addEventListener('click', function() {
    document.getElementById('menuOverlay').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evita el scroll en el body
});

document.getElementById('cerrarMenu').addEventListener('click', function() {
    document.getElementById('menuOverlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura el scroll en el body
});

