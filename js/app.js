function ajax(url, metodo="get") {
    let httpMetodo = metodo;
    let xhr = new XMLHttpRequest;
    xhr.open(httpMetodo, url);
    xhr.send();
    // console.log(xhr.response);

    return xhr
}

(function cargarNav(){
    let nav = document.querySelector('#nav');
    // console.log(nav);
    let xhr = ajax('navbar.html');
    
    xhr.addEventListener('load', () => {
        if(xhr.status == 200){
            // console.log(xhr.response);
            nav.innerHTML = xhr.response;
            getPlantillaConHistoryHash()
        }
    })
})();

//footer

(function cargarFooter() {
    let footer = document.querySelector('#footer');

    let xhr = ajax('footer.html');

    xhr.addEventListener('load', () => {
        if(xhr.status == 200){
            footer.innerHTML= xhr.response;
        }
    })
})();

// Cargar section 

function getPlantillaConHistoryHash(){
    let section = document.querySelector('#contenido');
    // console.log(sectionProductos);

    // Cargar Productos 
    let hash = location.hash;
    // console.log(hash);

    let archivo = (hash) ? hash.slice(1) + '.html' : 'home.html';
    let xhr = ajax(archivo);
    xhr.addEventListener('load', ()=>{
        if(xhr.status == 200){
            section.innerHTML = xhr.response;
        }
    })

    let links = document.querySelectorAll('a');
    // console.log(links);

    links.forEach(link => {
        link.addEventListener('click', e =>{
            e.preventDefault();
            let id = link.id
            location.hash = id;
            // console.log(id);
            
        })
    })


    //registro el cambio url

    window.addEventListener('hashchange', () => {
        let hash = location.hash
        // console.log(hash);

        let archivo = hash ? hash.slice(1) + '.html' : 'index.html';

        let xhr = ajax(archivo)
        xhr.addEventListener('load', () =>{
            if (xhr.status == 200) {

                section.innerHTML = xhr.response
            }
        })
    })
}

// window.onload = () => {
//     const btnHome = document.querySelector('#btn-contacto-home')
//     let section = document.querySelector('#contenido');
//     // console.log(btnHome);
    
//         btnHome.addEventListener('click', () => {
//             let xhr = ajax('contacto.html');
//             xhr.addEventListener('load', () => {
//                 if(xhr.status == 200){
//                     section.innerHTML = xhr.response;
//                 }
//         })
//         })
// }