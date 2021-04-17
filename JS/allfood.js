async function getDataAPI() {
  let promise = await fetch(`https://sheetdb.io/api/v1/62a1kcoxwbvio`);
  let data = await promise.json();
  // console.log(data);

  let size = Object.keys(data).length;
  // console.log(size);

  let img = document.getElementById("imgs");
  let name = document.getElementById("caption");
  let addr = document.getElementById("address");
  let desc = document.getElementById("desc");
  let like = document.getElementById("like");
  let price = document.getElementById("price");

  // console.dir(img);
  // console.dir(name);
  // console.dir(addr);
  // console.dir(desc);
  // console.dir(like);
  // console.dir(price);
  // let divdetail = document.getElementById("detail");
  let divRow = document.getElementById("divRow");
  // let detail = document.getElementById("myModal");

  var card = [];
  // Get the modal
  var modal = document.getElementById("myModal");

  for (let i = 0; i < size; i++) {
    divRow.insertAdjacentHTML(
      `beforeend`,
      `<div class="wrapper col-sm-3">
            <div class="card" id="border${i}" style="border-radius: 20px; border: none;">
              <img id="img" class="imgfood" src="${data[i].food_img}" alt="" />
              <div class="info">
                <h2 id="foodname" class="name">
                ${data[i].food_name}
                </h2>
              </div>
            </div>
          </div>`
    );
    var first = divRow.lastChild.lastChild;
    var second = first.previousSibling;
    console.dir(second.id);
    card.push(second.id);
    // console.log(id);
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // card = document.getElementById(`${id}${i}`);
    // console.log(card[2]);

    // divdetail.insertAdjacentHTML(
    //   `beforeend`,
    //   `<img id="imgs" src="${data[i].food_img}" alt="" />
    //   <div id="caption">
    //     <h1>${data[i].food_name}</h1>
    //     <hr />
    //     <p id="address">Địa chỉ: ${data[i].Address}</p>
    //     <p id="desc" style="max-width: 500px">${data[i].food_desc}</p>
    //     <p><i class="fas fa-heart"></i> ${data[i].like}</p>
    //     <p>Giá: ${data[i].price}</p>
    //   </div>`
    // );
  }
  console.log(card);
  let length = Object.keys(card).length;
  for (let i = 0; i < length; i++) {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var show = document.getElementById(`${card[i]}`);
    // var modalImg = document.getElementById("img");
    // var captionText = document.getElementById("caption");
    show.onclick = function () {
      modal.style.display = "block";
      //   modalImg.src = this.src;
      //   captionText.innerHTML = this.alt;
      img.src = data[i].food_img;
      name.innerHTML += `${data[i].food_name}`;
      addr.innerHTML += `<b>Địa chỉ: </b>${data[i].Address}`;
      desc.innerHTML += `<b>Giới thiệu: </b>${data[i].food_desc}`;
      like.innerHTML += `${data[i].like}`;
      price.innerHTML += `<b>Giá: </b>${data[i].price} VND`;
      console.log(`modal ${i}`);
    };

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
  }
  // ----------------- Modal ----------------------
  //   var first = divRow.lastChild.lastChild;
  //   var second = first.previousSibling;
  //   console.dir(second.id);
  //   var id = second.id.substr(0,6);
  //   console.log(id);
  //   // Get the modal
  //   var modal = document.getElementById("myModal");
  //   // Get the image and insert it inside the modal - use its "alt" text as a caption
  //   var card = document.getElementById(`${id}${i}`);
  //   // console.dir(img);
  // //   var modalImg = document.getElementById("img");
  // //   var captionText = document.getElementById("caption");
  //    for(let i = 0; i < img.length; i++){
  //     card[i].onclick = function () {
  //         modal.style.display = "block";
  //         //   modalImg.src = this.src;
  //         //   captionText.innerHTML = this.alt;
  //       };
  //    }

  //   console.log(modal)

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    name.innerHTML = ``;
    addr.innerHTML = ``;
    desc.innerHTML = ``;
    like.innerHTML = `<i class="fas fa-heart"></i> `;
    price.innerHTML = ``;
  };
}

getDataAPI();
