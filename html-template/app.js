// show delete icon on hover
$(document).on("mouseenter", ".todo-list-item", function (e) {
  $(this).find(".delete").removeClass("hidden");
});
$(document).on("mouseleave", ".todo-list-item", function (e) {
  $(this).find(".delete").addClass("hidden");
});

// toggle complet/incomplete item
$(document).on("change", 'input[type="checkbox"]', function () {
  checkboxWrapper = $(this).parent(".custom-checkbox");
  if (this.checked) checkboxWrapper.addClass("active");
  else checkboxWrapper.removeClass("active");
});

// toggle dark/light theme
$(document).on("click", ".light-icon", function () {
  $("body").removeClass("dark").addClass("light");
  $(this).addClass("hidden");
  $(".dark-icon").removeClass("hidden");
});
$(document).on("click", ".dark-icon", function () {
  $("body").removeClass("light").addClass("dark");
  $(this).addClass("hidden");
  $(".light-icon").removeClass("hidden");
});
