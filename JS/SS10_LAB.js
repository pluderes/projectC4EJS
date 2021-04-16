// async function getDataAPI() {
//   let promise = await fetch(`https://sheetdb.io/api/v1/uo37nyuvbu1k8`);
//   let data = await promise.json();
//   console.log(data);

//   let thumb = document.getElementById(`imgFood`);
//   let name = document.getElementById(`name`);
//   // let introduce = document.getElementById(`introduce`);
//   let address = document.getElementById(`address`);
//   // let review = document.getElementById(`review`);
//   // let link = document.getElementById(`link`);
//   // let ingred = document.getElementById(`listIngred`);
//   let content = document.getElementById(`detail`);

//   let size = Object.keys(data).length;
//   console.log(size);

//   let index = Math.floor(Math.random() * size+1);

//   thumb.src = data[index].Image;
//   name.innerHTML += `${data[index].Name}`;
//   address.innerHTML += `<p style="font-weight: bold;">Địa chỉ: </p> ${data[index].Address}`;
//   content.insertAdjacentElement(`beforeend`,``)
//   // introduce.innerHTML += `<p style="font-weight: bold;">Instructions: </p> ${data[index].Introduce}`;
//   // review.innerHTML += `<p style="font-weight: bold;">Review: <a href="${data[index].Review}">${data[index].Review}</a></p>`;
//   //------------------------------------------------------------
//   // let food = data.meals[0];

//   // let thumb = document.getElementById(`imgFood`);
//   // let meal = document.getElementById(`meal`);
//   // let cate = document.getElementById(`category`);
//   // let area = document.getElementById(`area`);
//   // let tag = document.getElementById(`tags`);
//   // let instruc = document.getElementById(`instructions`);
//   // let link = document.getElementById(`link`);
//   // let ingred = document.getElementById(`listIngred`);

//   // thumb.src = food.strMealThumb;
//   // meal.innerHTML += `${food.strMeal}`;
//   // cate.innerHTML += `<p style="font-weight: bold;">Category:  ${food.strCategory}</p>`;
//   // area.innerHTML += `<p style="font-weight: bold;">Area: ${food.strArea}</p> `;
//   // tag.innerHTML += `<p style="font-weight: bold;">Tags:  ${food.strTags}</p>`;
//   // instruc.innerHTML += `<p style="font-weight: bold;">Instructions: </p> ${food.strInstructions}`;
//   // link.src = convertToEmbedUrl(food.strYoutube);

//   //   function convertToEmbedUrl(youtubeUrl) {
//   //     return youtubeUrl.replace("watch?v=", "embed/");
//   // }

//   // let size = Object.keys(food).length;
//   // console.log(size);

//   // for(let i=1;i<size;i++){
//   //     if()
//   // }
// }
// getDataAPI();

// let Reload = document.getElementById('reload');
// Reload.onclick = function () {
//   location.reload();
// }
async function getDataAPI() {
    let promise = await fetch(`https://sheetdb.io/api/v1/62a1kcoxwbvio`);
    let data = await promise.json();

    let name = document.getElementById('foodName');
    let like = document.getElementById('like');

  let index = Math.floor(Math.random() * size+1);    
  }