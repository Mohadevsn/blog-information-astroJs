
    // Fonction pour attacher les écouteurs d'événements du suivi de la souris
    function attachMouseListeners() {
        const cursor = document.querySelector('.cursorcontente');
        let att = 0;
        let ett = 0;
        let mouseX = 0;
        let mouseY = 0;
        let scale = 1; // Valeur initiale de l'échelle
        let scaleY = 1; // Valeur initiale de l'échelle

        // Fonction de mise à jour de la position du curseur
        function updateCursorPos() {
            const rotation = att / 10;
            cursor.style.transition = 'transform 0.5s ease-out';
            cursor.style.opacity = '1';

            cursor.style.transform = `translate(${att + 15}px, ${ett + 15}px) scale(${scale},${scaleY}) rotate(${rotation}deg)`;
        }

        // Appel de la fonction de mise à jour de la position du curseur à chaque rafraîchissement de l'écran
        function animateCursor() {
            requestAnimationFrame(animateCursor);
            updateCursorPos();
        }

        // Démarrer l'animation du curseur
        animateCursor();

        // Fonction pour détecter l'arrêt du mouvement de la souris
        let timer;
        function detectMouseStop() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                scale = 1; // Réinitialiser l'échelle à 1 lorsque la souris est immobile
                scaleY = 1; // Réinitialiser l'échelle à 1 lorsque la souris est immobile
                cursor.style.transform = `translate(${att + 15}px, ${ett + 15}px) scale(${scale},${scale})`;
                console.log("La souris est immobile depuis 3 secondes !");
            }, 200); // 3000 millisecondes = 3 secondes
        }

        // Appel de la fonction de détection de l'arrêt du mouvement de la souris à chaque événement de souris
        document.addEventListener("mousemove", function(e) {
            att = e.pageX;
            ett = e.pageY;
            mouseX = e.pageX / window.innerWidth - 0.5;
            mouseY = e.pageY / window.innerHeight - 0.5;
            scale = mouseX / 2 + 1; // Mettre à jour l'échelle en fonction de la position de la souris
            scaleY = mouseY / 2 + 1; // Mettre à jour l'échelle en fonction de la position de la souris
            detectMouseStop();
        });
    }

    // Fonction pour détacher les écouteurs d'événements du suivi de la souris
    function detachMouseListeners() {
        document.removeEventListener("mousemove", handleMouseMove);
    }
    attachMouseListeners();
   
