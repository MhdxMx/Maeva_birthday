// GSAP powered animations for Maeva birthday card
var swiper = new Swiper('.swiper.gallery', {
    effect: 'cards',
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});
(function(){
    // Animate gallery images on page load
    gsap.from(".gallery img", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
    });

    var card = document.getElementById('card');
    if (!card) return;

    var wrap = document.querySelector('#card-inside .wrap');

    // Observer for class changes to card to trigger open/close animations
    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(m){
            if(m.attributeName === 'class'){
                var cls = card.getAttribute('class') || '';
                if(cls.includes('open-fully')){
                    swiper.update();
                    gsap.fromTo(wrap, {scale:0.8, opacity:0}, {scale:1, opacity:1, duration:0.6, ease:'back.out(1.7)'});
                }
                if(cls === ''){
                    gsap.to(wrap, {scale:0.8, opacity:0, duration:0.4});
                }
            }
        });
    });
    observer.observe(card, {attributes:true});
})();
