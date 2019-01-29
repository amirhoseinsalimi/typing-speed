$(() => {
  let capsLockOn = false;
  const $userInput = $('#userInput');

  function turnOnShiftMode() {
    $('div[alt-char]').each(function () {
      $(this).text($(this).attr('alt-char'));
    });
  }

  function turnOffShiftMode() {
    $('div[char]').each(function () {
      $(this).text($(this).attr('char'));
    });
  }

  function turnOnCapsLock() {
    $("div[class^='char-'], div[class*=' char-']").each(function () {
      $(this).text($(this).attr('alt-char'));
    });

    $('.caps-lock-indicator').css({
      'border': 'none',
      'background-color': '#179100',
    });

    capsLockOn = true;
  }

  function turnOffCapsLock() {
    $("div[class^='char-'], div[class*=' char-']").each(function () {
      $(this).text($(this).attr('char'));
    });

    $('.caps-lock-indicator').css({
      'border': '1px solid #fff',
      'background-color': 'transparent',
    });

    capsLockOn = false;
  }

  $userInput.on({
    keyup: (e) => {
      if (e.originalEvent.getModifierState('CapsLock')) {
        capsLockOn = true;
        turnOnCapsLock();
      } else {
        capsLockOn = false;
        turnOffCapsLock();
      }
    },
  });

  $(document).on({
    keydown: (e) => {
      const pressedKey = e.which;

      $(`[key-code=${pressedKey}]`).css({
        'background-color': '#fff',
        'color': 'tomato',
      });

      if (pressedKey === 16) {
        turnOnShiftMode();
      } else if (pressedKey === 20) {
        if (capsLockOn) {
          turnOffCapsLock();
        } else {
          turnOnCapsLock();
        }
      }
    },
    keyup: (e) => {
      const pressedKey = e.which;

      $(`[key-code=${pressedKey}]`).css({
        'background-color': 'tomato',
        'color': '#fff',
      });

      if (pressedKey === 16) {
        turnOffShiftMode();
      }
    },
  });
});
