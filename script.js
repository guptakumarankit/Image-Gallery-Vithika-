let page = 1;
let search = document.getElementById('search');
let button = document.querySelector('#button');
// console.log(button)

let form = document.querySelector('form');
// console.log(form);

const show_more = document.querySelector('.show-more');
console.log(show_more);

form.addEventListener('click',function(e){
     e.preventDefault();
})

button.addEventListener('click',function(e){
     document.querySelector('.gallery-section').innerHTML = '';
     fetchApi();
})

const apikey = "goM02dQ48L9ktGcO2sTn--2Qz2ADi3DLj6Jp4amH3G4";

async function fetchApi(){
     let input = search.value;
     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${apikey}&per_page=12`;
     const response = await fetch(url);
     // console.log(response);
     const data = await response.json();
     // console.log(data);
     const results = data.results;
     // console.log(results);
    
     results.forEach((result) =>{
          // console.log(result);
          const image = document.createElement("img");
          image.src = result.urls.small;
          const imageLink = document.createElement("a");
          imageLink.href = result.links.html;
          imageLink.target = "_blank";

          imageLink.appendChild(image);
          image.setAttribute("class","card");
          document.querySelector('.gallery-section').appendChild(imageLink);
     })
     show_more.setAttribute("id","active");
} 

show_more.addEventListener('click',()=>{
     show_more.removeAttribute("id","active");
     page++;
     fetchApi();
})
