let searchIcon = document.getElementById('search-icon')
let toggler = document.getElementById('navbar-toggler')
let navbarBrand = document.getElementById('navbar-brand')
let searchForm = document.getElementById('search-form')
let closeSearchIcon = document.getElementById('close-search')

searchIcon.addEventListener('click', (e)=>{
    e.preventDefault()
    toggler.style.display = 'none'
    searchIcon.style.display = 'none'
    navbarBrand.style.display = 'none'
    searchForm.style.display = 'flex'
})

closeSearchIcon.addEventListener('click', (e)=>{
    e.preventDefault()
    toggler.style.display = 'block'
    searchIcon.style.display = 'block'
    navbarBrand.style.display = 'block'
    searchForm.style.display = 'none'
})