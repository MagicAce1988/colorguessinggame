$(function () {
  const colorArray = [];
  let myColor;
  $('#gameArea').hide();
  $('#start').click(startGame);
  $('#output').on('click', '.cell', checkCell);

  $('#start').css({
    border: '1px solid black',
    textAlign: 'center',
    padding: '10px',
    width: '150px',
    backgroundColor: 'red',
    fontSize: '2em',
    marginBottom: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    color: 'white',
  });

  $('#findMe').css({
    boxSizing: 'border-box',
    border: '1px solid black',
    textAlign: 'center',
    padding: '0',
    width: '400px',
    fontSize: '2em',
    display: 'inline-block',
  });

  function startGame() {
    makeBoard();
    pickMyColor();
    $('#start').hide();
    $('#gameArea').show();
  }

  function addNewColor() {
    var trackColor = randomColor();
    colorArray.push(trackColor);
    return trackColor;
  }

  function makeBoard() {
    const x = 4;
    let html = '';
    for (let row = 0; row < x; row++) {
      html += '<div class="row">';
      for (let col = 0; col < x; col++) {
        html += '<div class="cell">0</div>';
      }
      html += '</div>';
    }
    $('#output').html(html);
    $('.cell').css({
      boxSizing: 'border-box',
      border: '1px solid black',
      textAlign: 'center',
      padding: '0',
      margin: '0',
      width: '100px',
      height: '100px',
      fontSize: '2em',
      color: 'white',
      display: 'inline-block',
      cursor: 'pointer',
    });
    $('.cell').each(function () {
      $(this).css({ backgroundColor: addNewColor() });
    });
  }

  function pickMyColor() {
    const index = Math.floor(Math.random() * colorArray.length);
    $('#findMe').css({
      backgroundColor: colorArray.splice(index, 1),
    });
  }

  function randomColor() {
    return '#' + Math.random().toString(16).substr(-6);
  }

  function checkCell() {
    const cellColor = $(this).css('background-color');
    if (cellColor === $('#findMe').css('background-color')) {
      let countValue = +$(this).text();
      countValue++;
      $(this).text(countValue);
      $(this).css('background-color', addNewColor());
      pickMyColor();
      $('#message').html('Correct - Great 👍');
    } else {
      $('#message').html('Sorry - Wrong Color 👎');
    }
  }

  $('body').css({
    height: 'calc(100vh / 1.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });
});
