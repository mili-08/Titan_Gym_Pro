document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".contador-numero");
    const speed = 80; 

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;


        const increment = Math.ceil(target / 100);

        if (count < target) {
            counter.innerText = count + increment; 
            setTimeout(() => animateCounter(counter), speed); 
        } else {
            counter.innerText = target;
        }
    };

    const isVisible = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const resetCounters = () => {
        counters.forEach(counter => {
            counter.innerText = "0"; 
        });
    };

    window.addEventListener("scroll", () => {
        const contadorSection = document.querySelector(".contador");
        if (isVisible(contadorSection)) {
            resetCounters(); 
            counters.forEach(counter => animateCounter(counter)); 
        }
    });
});