let add = document.querySelector('#add')
let content = document.querySelector('.content')


// add.addEventListener('click', () => {
//     let h1 = document.createElement('h1')
//     h1.innerText = `SALOM ${counter}`
//     content.appendChild(h1)

//     counter++
//     console.log(h1);
// })

let counter = 1

let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "white",
    "orange",
    "silver",
    "darkblue",
    "brown",
    "purple",
    "tomato"
]

let chars = '0123456789abcdef'

let a = chars.split('')
console.log(a);

add.addEventListener('click', () => {
let rnd = Math.floor(Math.random() * a.length)
let rnd2 = Math.floor(Math.random() * a.length)
let rnd3 = Math.floor(Math.random() * a.length)
let rnd4 = Math.floor(Math.random() * a.length)
let rnd5 = Math.floor(Math.random() * a.length)
let rnd6 = Math.floor(Math.random() * a.length)

    let box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = counter
    // box.style.backgroundColor = colors[rnd]
    box.style.backgroundColor = `#${a[rnd]}${a[rnd2]}${a[rnd3]}${a[rnd4]}${a[rnd5]}${a[rnd6]}`
    content.appendChild(box)
    // box.classList.add("active")

    console.log(box);
    counter++
})
