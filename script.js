fetch("http://api.tvmaze.com/shows")
.then(res=>res.json())
.then(blob=>{
    console.log(blob)
    for(let i=0;i<blob.length;i++){
        let div = document.createElement('div')
        $("#main").append(div)
        let title = document.createElement('p')
        let cover = document.createElement('img')
        div.onclick=()=>{
            sessionStorage.setItem('id',blob[i].id)
            window.location.href = "info.html"
        }
        div.appendChild(cover)
        cover.src = blob[i].image.medium
        div.appendChild(title)
        title.innerHTML = blob[i].name
    }
})

