var data = [
    {
        naam:"Hadiths of the Prophet",
        imgs:"IMG/best-books-of-hadith.jpg",
    },
    {
        naam:"Quran with Tajweed",
        imgs:"IMG/Quran with Tajweed.webp",
    },
    {
        naam:"Islamic Studies",
        imgs:"IMG/Islamic-Studies-Online.jpg",
    },
    {
        naam:"Quran Memorization",
        imgs:"IMG/Quran Memorization.jpg",
    },
    {
        naam:"Quran with Translation",
        imgs:"IMG/quran translate.jpg",
    },
    {
        naam:"History of Islam",
        imgs:"IMG/history.jpg",
    },
]
for (a=0; a<data.length; a++){
    document.getElementById('cardes').innerHTML+=`
    <div class="coursebx">
            <div class="coursebximg">
                <img src="${data[a].imgs}" alt="">
            </div>
            <h1>${data[a].naam}</h1>
            <button class="coursesbxbtn"><a href="https://wa.me/+447588193140">More Details</a></button>
        </div>
    `
}

