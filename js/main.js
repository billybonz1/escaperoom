"use strict";

document.addEventListener('DOMContentLoaded', function () {});
"use strict";

function initPuzzleInput() {
  $('.puzzle__input').on('keydown', function (e) {
    if (e.keyCode == '8' && $(this).val() == '') {
      $(this).prev().focus();
    }
  });
  $('.puzzle__input').on('keypress', function (e) {
    if (e.keyCode !== '8') {
      $(this).next().focus();
    }

    if ($(this).val().length > 0) {
      return false;
    }
  }); // get value from inputs on submit

  $('.puzzle__form').submit(function (e) {
    e.preventDefault();
    var dividedValue = '';
    $(this).find('.puzzle__input').each(function () {
      dividedValue += $(this).val();
    });
    console.log(dividedValue);
  });
}

initPuzzleInput();
"use strict";

function hidePopup() {
  var btns = document.querySelectorAll(".popup__btn");
  var popups = document.querySelectorAll(".popup");

  if (btns.length != 0) {
    btns.forEach(function (item) {
      item.addEventListener('click', function () {
        item.closest(".popup").classList.remove("active");
      });
    });
  }

  if (popups.length != 0) {
    popups.forEach(function (item) {
      item.addEventListener('click', function (event) {
        if (event.target == this) this.classList.remove("active");
      });
    });
  }
}

hidePopup();

function showPopup(id) {
  var popup = document.querySelector(id);

  if (popup) {
    popup.classList.add("active");
  }
}

function buttonClick(btn, id) {
  var btnOne = document.querySelector(btn);
  btnOne.addEventListener("click", function () {
    showPopup(id);
  });
}

buttonClick(".nav__btn--one", "#editor");
buttonClick(".nav__btn--two", "#congrat");
buttonClick(".nav__btn--three", "#answers");
buttonClick(".nav__btn--four", "#puzzle");
var items = document.querySelectorAll(".item");

if (items.length != 0) {
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      showPopup("#editor");
    });
  });
}
"use strict";

var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
} // modern Chrome requires { passive: false } when adding event


var supportsPassive = false;

try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
  passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; // call this to Disable

function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF

  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop

  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile

  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
} // call this to Enable


function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
"use strict";
//# sourceMappingURL=main.js.map

window.onload = function () {
  var ImageMap = function (map, img) {
        var n,
            areas = map.getElementsByTagName('area'),
            len = areas.length,
            coords = [],
            previousWidth = 1929;
        for (n = 0; n < len; n++) {
          coords[n] = areas[n].coords.split(',');
        }
        this.resize = function () {
          var n, m, clen,
              x = img.offsetWidth / previousWidth;
          for (n = 0; n < len; n++) {
            clen = coords[n].length;
            for (m = 0; m < clen; m++) {
              coords[n][m] *= x;
            }
            areas[n].coords = coords[n].join(',');
          }
          previousWidth = document.body.clientWidth;
          return true;
        };
        window.onresize = this.resize;
      },
      imageMap = new ImageMap(document.getElementById('room_img_map'), document.getElementById('room_img'));
  imageMap.resize();
  return;
}

startTimer();
var current_time = 3*60;

function startTimer() {
  setInterval(function(){
    current_time--;
    var time_text = timeToStr(current_time);
    $('.timer').text(time_text);
  });


}

jQuery(function ($) {
  var timetofinish = 60 * 30,
      display = $('.timer');
 // startTimer(timetofinish, display);
});

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}