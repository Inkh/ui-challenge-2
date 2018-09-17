'use strict';

console.log('link');

// $('.rad-group')
// $('.radio').on('click', function (e) {
// console.log($(this));
// $(this).toggleClass('radio-select');
// e.target.addClass('radio-select');
// console.log($(this).siblings()[0].toggleClass('radio-select'))
// })

$('.sel')
$('.sel').children().each((() => {
  console.log('i child');
}));

$('.rad-group').on('click', function () {
  console.log($(this));
  console.log($(this).children()[0])
  $(this).children().prop('checked', 'checked');
  console.log($(this).children().val())
})