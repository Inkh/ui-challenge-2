'use strict';

console.log('link');

$('.sel').children().each((() => {
  console.log('i child');
}));

$('.rad-group').on('click', function () {
  $(this).children().prop('checked', true);
  console.log($(this).children().val())
});

$('.check-group').on('click', function () {
  if ($(this).children().prop('checked')) {
    $(this).children().prop('checked', false);
  } else {
    $(this).children().prop('checked', true);
  }
});



