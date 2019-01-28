$(() => {
  $(document).on({
    keydown: (e) => {
      const pressedKey = e.which;

      $(`[key-code=${pressedKey}]`).css({
        'background-color': '#fff',
        'color': 'tomato',
      });

      if (pressedKey === 16) {
        $('div[alt-char]').each(function () {
          $(this).text($(this).attr('alt-char'));
        });
      }
    },
    keyup: (e) => {
      const pressedKey = e.which;

      $(`[key-code=${pressedKey}]`).css({
        'background-color': 'tomato',
        'color': '#fff',
      });

      if (pressedKey === 16) {
        $('div[char]').each(function () {
          $(this).text($(this).attr('char'));
        });
      }
    },
  });
});
