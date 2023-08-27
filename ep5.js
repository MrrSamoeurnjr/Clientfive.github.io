const product = [
    {
        id:0 ,
        image:'https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/my/mkt/plp/new-laptops/img-0625/matebook-16s-2023-kv.jpg',
        title:'Laptop',
        price:100,
    },
    {
        id:1 ,
        image:'https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg',
        title:'Phone',
        price:100,
    },
    {
        id:2 ,
        image:'https://www.sony.com.sg/image/ccbe548efa94995a9c034d96a4a6acbb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320',
        title:'TV',
        price:100,
    }
    ,
    {
        id:3 ,
        image:'https://nika2u.com/flutter/uploads/HT-S16R2.jpg',
        title:'Hatari',
        price:100,
    }
    ,
    {
        id:4 ,
        image:'https://i.insider.com/5be2139a01b12d3fe0767fee?width=1000&format=jpeg&auto=webp',
        title:'Foldable',
        price:100,
    }
]
const categories = [...new Set(product.map((item)=> {
    return item;
}))]
document.querySelector(".search_bar").addEventListener('keyup',(e)=> { 
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return (
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
})
const displayItem = (items) => {
    document.querySelector(".addproduct").innerHTML = items.map((item)=> {
        var{title,price,image} = item;
        return (
            `
                <div class = "box">
                    <div class = "img_box">
                        <img src=${image}></img>
                    </div>
                    <div class = "bottom">
                        <p>${title}</p>
                        <h4>$${price}</h4>
                        <button>Add to cart</button>
                    </div>
                </div>
            `
        )
    }).join('')
}
displayItem(categories)