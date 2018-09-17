'use strict';

console.log('link');

$('.sel').children().each((() => {
  console.log('i child');
}));

//Radio listener
$('.rad-group').on('click', function () {
  $(this).children().prop('checked', true);
  console.log($(this).children().val())
});

//Checkbox listener
$('.check-group').on('click', function () {
  if ($(this).children().prop('checked')) {
    $(this).children().prop('checked', false);
  } else {
    $(this).children().prop('checked', true);
  }
});

$('.form').on('submit', function (e) {
  e.preventDefault();
  if ($('#input').val().length < 2) {
    $('#input').addClass('error').after('<p class="text-err">please enter a valid username</p>');
  }
})



