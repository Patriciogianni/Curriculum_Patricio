//let selector = document.getElementsByTagName('a')
function ajax(url, metodo) {
    let httpMetodo = metodo || 'get'
    let xhr = new XMLHttpRequest
    xhr.open(httpMetodo, url)
    xhr.send()
    return xhr
}

let main = document.querySelector('main')
let link = document.querySelectorAll('a')


link.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        let id = link.id
        let archivo = id +'.html'
        let xhr = ajax(archivo)
        xhr.addEventListener('load', () =>{
            if(xhr.status == 200){
                let bloque = document.getElementById('bloqueIndex') 
                bloque.innerHTML = xhr.response
                main.bloqueIndex.appendChild(bloque)
            }

        })

    })

})


