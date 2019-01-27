$(() => {
  $(document).on({
    keydown: (e) => {
      const pressedKey = e.which;

      $(`[key-code=${pressedKey}]`).css({
        'background-color': '#fff',
        'color': 'tomato',
      });
    },
    keyup: (e) => {
      const pressedKey = e.which;

      $(`[key-code=${pressedKey}]`).css({
        'background-color': 'tomato',
        'color': '#fff',
      });
    },
  });
});
