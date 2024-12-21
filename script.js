new Swiper('#products-section__swiper-container-1', {
    spaceBetween: 16,
    slidesPerView: 1.2,
    roundLengths: true,
    pagination: {
        el: "#products-section__pagination-1",
        clickable: true,
    },
})

const moreInfoBtn = document.getElementById('more-info_btn-1')

if (moreInfoBtn !== null) {
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
}

new Swiper('#products-section__swiper-container-2', {
    spaceBetween: 16,
    slidesPerView: 1.2,
    roundLengths: true,
    pagination: {
        el: "#products-section__pagination-2",
        clickable: true,
    },
})

new Swiper('#price-list__table', {
    spaceBetween: 16,
    slidesPerView: 1.1,
    roundLengths: true,
    pagination: {
        el: "#price-list__pagination",
        clickable: true,
    },
})