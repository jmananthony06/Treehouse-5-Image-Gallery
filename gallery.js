let gallery = document.getElementById('gallery');

//object of text info
const imageInfo = [
  {
    name: "01.jpg",
    alt: "Hay Bales",
    text:
      "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
  },
  {
    name: "02.jpg",
    alt: "Lake",
    text:
      "The lake was so calm today. We had a great view of the snow on the mountains from here.",
  },
  {
    name: "03.jpg",
    alt: "Canyon",
    text:
      "I hiked to the top of the mountain and got this picture of the canyon and trees below.",
  },
  {
    name: "04.jpg",
    alt: "Iceberg",
    text:
      "It was amazing to see an iceberg up close, it was so cold but didn’t snow today. ",
  },
  {
    name: "05.jpg",
    alt: "Desert",
    text:
      "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.",
  },
  {
    name: "06.jpg",
    alt: "Fall",
    text:
      "Fall is coming, I love when the leaves on the trees start to change color.",
  },
  {
    name: "07.jpg",
    alt: "Plantation",
    text: "I drove past this plantation yesterday, everything is so green!",
  },
  {
    name: "08.jpg",
    alt: "Dunes",
    text: "My summer vacation to the Oregon Coast. I love the sandy dunes!",
  },
  {
    name: "09.jpg",
    alt: "Countryside Lane",
    text: "We enjoyed a quiet stroll down this countryside lane. ",
  },
  {
    name: "10.jpg",
    alt: "Sunset",
    text: "Sunset at the coast! The sky turned a lovely shade of orange.",
  },
  {
    name: "11.jpg",
    alt: "Cave",
    text:
      "I did a tour of a cave today and the view of the landscape below was breathtaking.",
  },
  {
    name: "12.jpg",
    alt: "Bluebells",
    text:
      "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.",
  },
];
// this loop is intended to iterate over img length by interpolation of gallery images
//a console.log() will have ability to show all images and text from file folder on to page while connected to jQuery lightbox plugin

populateImg(imageInfo); // takes all 12 images in array and passes it into populated img function

//takes imageInfo transforms from this to the function below named galleryData set in the parameter below

function populateImg(galleryData) {
    // emptying out the gallery div then appends template literal which has images in it - check line of code below lines 85-88
    gallery.innerHTML = ""; 
//for loop allows images to be appended while typing into the searchbar via jQuery library - keys in that has the data lightbox and title 
  for (let i = 0; i < galleryData.length; i++) {
    gallery.innerHTML += `<a class="demo" href="photos/${galleryData[i].name}" data-lightbox="gallery" data-title="${galleryData[i].text}">
    <img class="example-image" src="photos/${galleryData[i].name}" alt="${galleryData[i].alt}"></a>`;
  }
}

// library for jQuery implemented requires the anchor tag to be selected for this to work in lines 85-88 above

let searchBar = document.getElementById("search");

searchBar.addEventListener("keyup", (e) => {
  var query = e.target.value;
  // filter works that if it returns true it becomes a new array and if not then its removed from new array - checks to see what word being typed 
  var filteredArray = imageInfo.filter((item) => {
    return item.text.includes(query); // .includes returns true or false if string has said character inside of it 
  });
  populateImg(filteredArray); // takes filtered array and gives portion of array back
});
