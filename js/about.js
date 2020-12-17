var $next = 1;
var $current = 0;
var $interval = 4000;
var $fadeTime = 2000;
var $imgNum = 2;
var $banner = $(".imgslide").find("li");

$banner.hide();
banEffect();
function banEffect() {
  $banner.eq($current).show();
  $banner.eq($current).delay($interval);
  $banner.eq($current).fadeOut($fadeTime, function () {
    $banner.eq($current).hide();
    if ($next < $imgNum - 1) {
      $next++;
    } else {
      $next = 0;
    }
    if ($current < $imgNum - 1) {
      $current++;
    } else {
      $current = 0;
    }
    $banner.eq($current).fadeIn($fadeTime, banEffect);
  });
}
var i = $(".slide").length;
var currentIndex = 0;
var position;

$(".next").click(function () {
  if (currentIndex < i - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  $(".slide")
    .eq(currentIndex - 1)
    .hide();
  $(".slide").eq(currentIndex).show();
});
