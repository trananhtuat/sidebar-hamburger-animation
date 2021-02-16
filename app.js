let nav = document.querySelector('.nav')

let li = nav.querySelectorAll('li')

let group_size = Math.ceil(li.length / 3)

let group_index = 0

li.forEach((e, i) => {    
    e.setAttribute('data-group', group_index)

    group_index = i % group_size === group_size - 1 ? group_index + 1 : group_index
})

document.querySelector('#nav-toggle').onclick = (e) => {
    e.preventDefault()

    console.log(li[0].getBoundingClientRect())
    
    li.forEach((el, i) => {
        let top = el.getBoundingClientRect().top + el.getAttribute('data-group') * -17 - 100

        el.style.setProperty('--top', top)
        el.style.setProperty('--delay-close', `${i * 0.1}s`)
        el.style.setProperty('--delay-open', `${(li.length - i) * 0.1}s`)
    })

    nav.classList.toggle('nav-closed')

    e.stopPropagation()
}