if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", initUi);
} else {
  initUi();
}
function initUi() {
  //add to cart
  const saveBtn = document.querySelectorAll(".savedBtn");
  console.log(saveBtn);
  saveBtn.forEach((btn) => {
    btn.addEventListener("click", addBooktoCart);
  });
}

function addBooktoCart(event) {
  //   console.log(
  //     event.target.parentElement.parentElement.parentElement.parentElement
  //   );
  console.log(event.target.closest(".cartItem"));
  const bookItem = event.target.closest(".cartItem");
  const bookImage = bookItem.querySelector(".cart-item-img").src;
  const bookTitle = bookItem.querySelector(".cart-item-title").textContent;
  console.log(bookItem, bookImage, bookTitle);
  addBooktoCartUi(bookImage, bookTitle);
}
function addBooktoCartUi(bookImage, bookTitle) {
  const cartRow = document.createElement("div");
  const cartItems = document.querySelector(".cart-items");
  cartRow.classList.add("cart-row");
  const bookNameInCart = document.querySelectorAll(".book-item-title");
  const book = document.querySelectorAll(".book-item-img");
  for (let i = 0; i < bookNameInCart.length; i++) {
    if (bookNameInCart[i].textContent == bookTitle) {
      alert("This bookis already added");
      return;
    }
  }
  // for (let i = 0; i < bookNameInCart.length; i++) {
  //   if (bookNameInCart[i].innerText == bookTitle) {
  //     alert("This book is already added");
  //     return;
  //   }
  // }
  const cartRowContent = `<div class="row justify-content-between align-items-center py-3">
                          <div class="col">
                            <img class="book-item-img cart-img img-fluid" src="${bookImage}" alt="" />
                          </div>
                          <div class="col">
                            <p class="book-item-title text-white fs-5">${bookTitle}</p>
                          </div>
                        </div>`;
  cartRow.innerHTML = cartRowContent;
  cartItems.appendChild(cartRow);
}
