function animateValue(element, target, duration) {
            let start = 0;
            let startTime = null;

            function animation(currentTime) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                const easeOutQuad = (t) => t * (2 - t);
                
                const currentCount = Math.floor(easeOutQuad(progress) * target);
                element.textContent = currentCount;

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                } else {
                    element.textContent = target; 
                }
            }
            requestAnimationFrame(animation);
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counterElement = entry.target;
                    const targetValue = parseInt(counterElement.getAttribute('data-target'), 10);
                    if (!counterElement.classList.contains('animated')) {
                        animateValue(counterElement, targetValue, 2000); 
                        counterElement.classList.add('animated');
                    }
                    observer.unobserve(counterElement);
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.b-stat-card__value[data-target]').forEach(el => {
            observer.observe(el);
        });