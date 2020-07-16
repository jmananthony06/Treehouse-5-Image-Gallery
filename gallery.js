// let gallery = document.getElementById('gallery');

//object of text info
const imageInfo = [{
    name:"01.jpg",
    alt:"Hay Bales",
    text:"I love hay bales. Took this snap on a drive through the countryside past some straw fields."
},
{
    name:"02.jpg",
    alt:"Lake",
    text:"The lake was so calm today. We had a great view of the snow on the mountains from here."
},
{
    name:"03.jpg",
    alt:"Canyon",
    text:"I hiked to the top of the mountain and got this picture of the canyon and trees below."
},
{
    name:"04.jpg",
    alt:"Iceberg",
    text:"It was amazing to see an iceberg up close, it was so cold but didn’t snow today. "
},
{
    name:"05.jpg",
    alt:"Desert",
    text:"The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
},
{
    name:"06.jpg",
    alt:"Fall",
    text:"Fall is coming, I love when the leaves on the trees start to change color."
},
{
    name:"07.jpg",
    alt:"Plantation",
    text:"I drove past this plantation yesterday, everything is so green!"
},
{
    name:"08.jpg",
    alt:"Dunes",
    text:"My summer vacation to the Oregon Coast. I love the sandy dunes!"
},
{
    name:"09.jpg",
    alt:"Countryside Lane",
    text:"We enjoyed a quiet stroll down this countryside lane. "
},
{
    name:"10.jpg",
    alt:"Sunset",
    text:"Sunset at the coast! The sky turned a lovely shade of orange."
},
{
    name:"11.jpg",
    alt:"Cave",
    text:"I did a tour of a cave today and the view of the landscape below was breathtaking."
},
{
    name:"12.jpg",
    alt:"Bluebells",    
    text:"I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
}];
// this loop is intended to iterate over img length by interpolation of gallery images
//a console.log() will have ability to show all images from file folder on to page
for (let i = 0; i < imageInfo.length; i++) {
    gallery.innerHTML += `<img src="photos/${imageInfo[i].name}" alt="${imageInfo[i].alt}">`;
};

//tag name only gets html collection of nodes
const images = document.getElementsByTagName('img');

// this translates node collection into clickable images also showing 
//source of image when clicked - result shows in console
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', e => {
        console.log(e.target.src);
        toggleFunction();
    });   
};

/*TWO FUNCTIONS THAT TOGGLE A CLASS*/

// this function works upon initial click toggle
function toggleFunction() {
    let element = document.getElementById("lighthouse");
    element.classList.toggle("open");
  }

// this function works to exit lighthouse toggle



// lightbox logic and details need to be done w/ jQuery plugin
// also a jQuery plugin for search box