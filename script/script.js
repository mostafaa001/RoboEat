$(".card button").each(function (_, el) {
  el.addEventListener("click", () => {
    $(el).toggleClass("like dislike");

    if ($(el).hasClass("like")) {
      $(el).html('<i class="fa-solid fa-thumbs-up"></i><span>like</span>');
    } else {
      $(el).html('<i class="fa-solid fa-thumbs-down"></i><span>dislike</span>');
    }
  });
});
