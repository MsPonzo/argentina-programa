
        var acc = document.getElementsByClassName("acordeon");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "visible";
            } else {
              panel.style.display = "block";
            }
          });
        }
   