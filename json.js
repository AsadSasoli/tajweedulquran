var data = [
    {
        naam:"Hadiths of the Prophet",
        imgs:"https://www.quranhost.com/wp-content/uploads/2020/08/best-books-of-hadith.jpg",
    },
    {
        naam:"Quran with Tajweed",
        imgs:"https://cdn-gblnp.nitrocdn.com/ckHDmEwPmzNuYYSirDDoRUCcNbqqNPjc/assets/images/optimized/rev-992cb6a/wp-content/uploads/2021/11/syed-aoun-abbas-RwWh6HbkP-s-unsplash-min-min-1080x675.jpg",
    },
    {
        naam:"Islamic Studies",
        imgs:"https://onlinemehrabqurancenter.com/wp-content/uploads/2021/12/Islamic-Studies-Online.jpg",
    },
    {
        naam:"Quran Memorization",
        imgs:"https://alquranworld.com/wp-content/uploads/2021/05/quran-1.jpg",
    },
    {
        naam:"Quran with Translation",
        imgs:"https://i.pinimg.com/550x/26/71/8a/26718a999e0904de656bc668a674aaa3.jpg",
    },
    {
        naam:"History of Islam",
        imgs:"https://www.alim.org/img/history.jpg",
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

