document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("theme2")) {
    document.body.classList.add("theme1");
    document.body.classList.remove("theme2");
  } else {
    document.body.classList.add("theme2");
    document.body.classList.remove("theme1");
  }
});
