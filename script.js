new Swiper('.products-section__swiper-container', {
    spaceBetween: 16,
    slidesPerView: 1.2,
    roundLengths: true,
    pagination: {
        el: '.products-section__pagination',
        clickable: true,
    },
})

const moreInfoBtn = document.getElementById('more-info_btn-1')

moreInfoBtn.addEventListener('click', function () {
    const elements = document.querySelectorAll('.products-section__element')
    elements.forEach(function (element) {
        if (element.classList.contains('products-section__element_visible')) {
            element.classList.remove('products-section__element_visible')
            moreInfoBtn.innerHTML = 'Показать все'
            moreInfoBtn.classList.remove('products-section__more-info_active')
        }
        else {
            element.classList.add('products-section__element_visible')
            moreInfoBtn.innerHTML = 'Скрыть'
            moreInfoBtn.classList.add('products-section__more-info_active')
        }
    })

})

