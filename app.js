$(function () {
  $('#gameArea').hide();
  $('#start').click(startGame);

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
    border: '1px solid black',
    textAlign: 'center',
    padding: '0',
    width: '400px',
    fontSize: '2em',
    marginBottom: '10px',
    display: 'inline-block',
  });

  function startGame() {
    console.log('start');
  }

  $('body').css({
    height: 'calc(100vh / 1.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });
});
