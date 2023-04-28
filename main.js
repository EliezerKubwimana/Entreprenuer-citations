const citations =[
    {
    name: "Jack Ma",
    img: "Image/download (4).jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab?"
},
{
    name: "Robert Kiyosaki",
    img: "Image/download (1).jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing."
},
{
    name: "Chris Gardner",
    img: "Image/download (2).jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
},
{
    name: "Oprah Winfrey",
    img: "Image/download (3).jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel."
},
{
    name: "Albert Einsten",
    img: "Image/download.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cumque veritatis."
},
{
    name: "Elon Musk",
    img: "Image/images (1).jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magnam minus voluptate."
},
]

const imgEl = document.querySelector("img") 
const textEl = document.querySelector(".text") 
const usernameEl = document.querySelector(".username") 

let idx = 0;

updateCitations()

function updateCitations() {
    const {name, img, text} = citations[idx];
    imgEl.src = img;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === citations.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateCitations()
    }, 5000)
}