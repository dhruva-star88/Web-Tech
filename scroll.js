




<script>
    function smoothScroll(target, duration) {
        var targetElement = document.getElementById(target);
        var targetPosition = targetElement.getBoundingClientRect().top;
        var startPosition = window.pageYOffset || window.scrollY;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t = d / 2;
            if (t < 1) 
            return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Smooth scroll trigger
    document.getElementById('trigger1').addEventListener('click', function() {
        smoothScroll('section2', 1000); // Change 'section2' to the ID of the target section
    });

    document.getElementById('trigger2').addEventListener('click', function() {
        smoothScroll('section3', 1000); // Change 'section3' to the ID of the target section
    });
</script>
