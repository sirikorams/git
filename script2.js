let  i1 = document.getElementById("photo")
let ph = document.getElementById("img1")
i1 = addEventListener("click",function image()
{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data=> {
        console.log(data)
        ph.src = data.message
    })
})