$(() => {
  $(document).on('keydown', (e) => {
    const pressedKey = e.which;

    $(`[key-code=${pressedKey}]`).css({
      'background-color': 'blue',
    });
  });
});
