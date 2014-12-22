ZGN(function()
{
  // 22番ピンで動作させます
  var switchPin = '22';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;

  // 指定ピンを入力に設定
  gpio.pinMode(switchPin, ZGN.INPUT);

  setInterval(function() {
    // 100ms毎にピンの状態を取得
    gpio.digitalRead(switchPin, function(pinStatus) {
      // ピンがHIGHの場合
      if (pinStatus == ZGN.HIGH) {
        $('#status').text('ON');
      }

      // ピンがLOWの場合
      else {
        $('#status').text('OFF');
      }
    });
  }, 100);
});
