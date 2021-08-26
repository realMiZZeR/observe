window.addEventListener("DOMContentLoaded", () => {
    const countNums = () => {
        const numbersObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const count = new CountUp(
                        entry.target.id,
                        0,
                        entry.target.dataset.num,
                        0,
                        entry.target.dataset.duration || 4,
                        {
                            separator: "",
                            prefix: entry.target.dataset.prefix || "",
                            suffix: entry.target.dataset.suffix || ""
                        }
                        
                    );
                    count.start(() => {
                        entry.target.parentElement.classList.add("numbers__item_done");
                    });
                    observer.unobserve(entry.target);
                }
            });
            
        });
        document.querySelectorAll(".numbers__item span").forEach(num => {
            numbersObserver.observe(num)
        });
    }
    countNums();
});