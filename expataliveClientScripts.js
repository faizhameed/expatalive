function placement() {
  const aub = document.querySelector(".author-box");
  const subBox = document.querySelector(".et_bloom_below_post");
  const commentBox = document.querySelector("#wpdevar_comment_2")
    ? document.querySelector("#wpdevar_comment_2")
    : document.querySelector("#wpdevar_comment_1");
  if (subBox) {
    commentBox.insertAdjacentElement("afterend", subBox);
  }
  if (aub) {
    commentBox.insertAdjacentElement("beforebegin", aub);
  }
}

window.addEventListener("load", placement);
