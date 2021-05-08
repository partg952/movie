let id = sessionStorage.getItem('id')
console.log(id)
fetch("https://api.tvmaze.com/shows/"+id)
.then(res=>res.json())
.then(blob=>{
    console.log(blob)
    document.title = blob.name
    let genre_div = document.createElement('div')
    genre_div.classList.add('genres')
    $('#cover').attr('src',blob.image.original)
    let title = document.createElement('h1')
    title.textContent = blob.name
    $('#info').append(title)
    document.body.style.backgroundImage = `url(${blob.image.original})`
    $('#info').append(blob.summary)
    $('#info').append(document.createElement('p').innerHTML = "<strong>Language</strong>: "+blob.language)
    $('#info').append(genre_div)
    
    for(let i=0;i<blob.genres.length;i++){
        let p = document.createElement('p')
        p.textContent = blob.genres[i]
        genre_div.appendChild(p)
    }
    
})

fetch(`https://api.tvmaze.com/shows/${id}/cast`)
.then(res=>res.json())
.then(cast=>{
    console.log(cast)
    for(let i=0;i<cast.length;i++){
        let div = document.createElement('div')
        let img = document.createElement('img')
        let name = document.createElement('p')
        name.textContent = cast[i].person.name
        img.src = cast[i].person.image.original
        div.appendChild(img)
        div.appendChild(name)
        
        $('#cast').append(div)
    }
})