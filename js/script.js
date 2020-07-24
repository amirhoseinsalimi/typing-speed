$(() => {
    let capsLockOn = false;
    const $userInput = $('#userInput');

    $(document).on('click', (e) => {
        if (e.target !== document.getElementsByTagName('input')[0]) {
            e.preventDefault();
            $userInput.focus();
        }
    });

    /**
     *
     * @param toggleIndicator: defaults to true. To take control of the CapsLockIndicator
     */
    function turnOnCapsLock(toggleIndicator = true) {
        $("div[class^='letter-'], div[class*=' letter-']").each(function() {
            $(this).text($(this).attr('alt-char'));
        });

        if (toggleIndicator) {
            $('.caps-lock-indicator').css({
                'border': 'none',
                'background-color': '#179100',
            });

            capsLockOn = true;
        }
    }

    function turnOffCapsLock(toggleIndicator = true) {
        $('.letter').each(function() {
            $(this).text($(this).attr('char'));
        });

        if (toggleIndicator) {
            $('.caps-lock-indicator').css({
                'border': '1px solid #fff',
                'background-color': 'transparent',
            });

            capsLockOn = false;
        }
    }

    function turnOnShiftMode() {
        $('div.key:not(".letter")').each(function() {
            $(this).text($(this).attr('alt-char'));
        });

        turnOnCapsLock(false);
    }

    function turnOffShiftMode() {
        $('div.key:not(".letter")').each(function() {
            $(this).text($(this).attr('char'));
        });

        if (!capsLockOn) {
            turnOffCapsLock(false);
        }
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
        mousedown: (e) => {
            e.preventDefault();
            e.stopPropagation();
        }
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