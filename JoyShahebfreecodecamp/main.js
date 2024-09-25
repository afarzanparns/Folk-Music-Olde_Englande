

/*

let shop = document.getElementById('shop');

let generateShop = () => {
  return(shop.innerHTML = `
  <div class = 'item' >
    <img width = '220' src = 'images/img-1.jpg' >
    <div class = 'details' >
      <h3>cash shirt</h3>
      <p>lorem7 parag</p>
      <div class = 'price-quantity' >
        <h2>$ 45</h2>
        <div class = 'buttons' >
          <i class = 'bi bi-dash-lg' ></i>
          <div class = 'quntity' >0</div>
          <i class = 'bi bi-plus-lg' ></i>
        </div>
      </div>
    </div>
  </div>

`)};

generateShop();

                   */




let shop = document.getElementById('shop');

console.log(shop);

let shopItemsData = [{
     id: 'eyspoiu',
   name: 'cash shirt',
  price: 45,
   desc: 'paragraph txt describing product for sale in the illustration on this card. We believe that this is a good show. So proceed to checkeuit',
    img: 'images/img-1.jpg',
},{
     id: 'swer',
   name: 'oficy shirt',
  price: 100,
   desc: 'Lorem7 mit adipisicing or owt',
    img: 'images/img-2.jpg',
},{
     id: 'soiksl',
   name: 'tee shirt',
  price: 25,
   desc: 'Lorem7 and consectetur and them some',
    img: 'images/img-3.jpg',
},{
     id: 'iowup',
   name: 'bloke suit',
  price: 300,
   desc: 'Lorem7 ipsum dollar sit amet wjat-u-like',
    img: 'images/img-4.jpg',
}];

let generateShop = () => {
  return(shop.innerHTML = shopItemsData.map((x) => {
    return  `

<div id = product-id-${x.id}  class = 'item' >
    <img width = '220' src = ${x.img} alt = '' >
    <div class = 'details' >
      <h3>${x.name}</h3>
      <p>${x.desc}</p>
      <div class = 'price-quantity' >
        <h2>$ ${x.price}</h2>
        <div class = 'buttons' >
          <i onclick = 'decrement($(x.id))' class = 'bi bi-dash-lg' ></i>
          <div id = ${x.id}  class = 'quantity' >0</div>
          <i onclick = 'increment($(x.id))' class = 'bi bi-plus-lg' ></i>
        </div>
      </div>
    </div>
</div>

`;
}).join(''));
};

generateShop();


let decrement = () => {
  console.log('decrement');
};
let increment = () => {
  console.log('increment');
};
   let update = () => {};


/*

911c2c.org Richard Gage, possibly recorded on 20240912Thu
The Family Industrial Complex 20240918Wed 2200BST = 1700EDT,
richardgage911.org

20240923Mon  Crypt Rick with his guest Marvin two yts=
Easing people into waking up
jointheinternet

20240924Tue GForum health connection WG? H2 of show at 1806
Scott - Original Hippocratic Oath dates back to 400BC
Pray for Scott for he will benefit from our energy

20240924Tue


https://hybrid.goldenleaves.com/2024-report-july?cep=EDAX5-eCSAuzNsWk1Ts3awJopXU6l-skZjGCW-SifW4QCwETmF4xUaQusp0tNsuIcSiUgSXo1mYfhkNcbbNYEpBjG1Lu_Tb9LxPzV-C7E-7HzYEraKRrJsAsD9-mHk9E3uqOyCeEQyPtZKpBiVoBwlZ-i8B_Jn9RAqXF8NlW1cEACu2hDqlM1qG90YsMN9VA6HdazetILjEjzDe_Qkxm7g1-sTxtYyjRxYgvNe7IGQ4_XwhGaARXC2YjKV6ORqabfVekTMyaFLLBNxzsmfUaswPV8AtyJjJcCAZAyWkVhRU4NkepzpVyj6PNi9ppNJ6m3PBvR2wU_JzbuSYR4cWC7CtceSvvnfgLvzcZkbowH2fZLfMCrxGytT8AwWBb6xErP4AUW1fVgmQbDisS3J7J4R6Meni5Ic2Q0y1NpX9JCgbZLZfHtH-6twRaTull3RDfEzgQ9R8Pn46LteJwcZxMef8zy47au1uhYiQU0k5VHGHOKf8U5sRdzO2b5JRqGurPnO8Tn1OMCkFy1-rt4KuK8bYelQtEif4NgchCnlbg6z5Cob8t3WLbUJLAK4PvbsF7YcQLtkO3UeLKBsvZm7moZqVUpIoqyEMRKMIlHlTgiy-u3rSzzUb0uPcnMUJj5IpiK-emqy4AG94z_zzBnIC0jwE4J7uSueer3FnIRk3_3iKNJY2mGxBkVWX-fzDv_c8dOLs1QIZd7enOxXxuu0q9i8OPQ9GY759Rib8a5Cms93JpfaugDg4PpjNhttcktshyReVxL-TGHQ3tLTvwEWwr7Hd2TZR5BWSSqlJxe3EECXmG6xV0gh3YyAVWfbfwyKsRIJX-iuRwV0A90l5Mk2GQYg&lptoken=17b627ca13004307671e&campaign_item_id=4030179235&site=msn-casualgames-microsoftsolitairecollection-uk&campaign_id=42137880&title=%22No+Fuss%22+Cremations%3A+Here%27s+What+UK+Residents+Need+To+Know&thumbnail=http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fd7a73a43d51512760a4d084382892aa2.png&site_id=1046529&click_id=GiCUznt9j8CMvPT5Lf30QuqSXzIP-IEe1SHnoko3azoVxSDf8Fsos-bZ19-Z6NflATCB8D8&utm_source=taboola&utm_medium=referral&tblci=GiCUznt9j8CMvPT5Lf30QuqSXzIP-IEe1SHnoko3azoVxSDf8Fsos-bZ19-Z6NflATCB8D8#tblciGiCUznt9j8CMvPT5Lf30QuqSXzIP-IEe1SHnoko3azoVxSDf8Fsos-bZ19-Z6NflATCB8D8


                    */