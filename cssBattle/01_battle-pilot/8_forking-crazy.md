# Target #8 - Forking Crazy

![Forking Crazy](https://cssbattle.dev/targets/8.png)

```
<div class="bg">
    <div class="upward-circle"></div>
    <div class="upward-circle left-margin"></div>
    <div class="upward-circle left-margin"></div>
    <div class="upward-circle left-margin"></div>
</div>
<div id="striped"></div>
<div class="bg darker">
    <div class="downward-circle left-margin"></div>
    <div class="downward-circle left-margin"></div>
    <div class="downward-circle left-margin"></div>
</div>
<div id="bottom"></div>
<div id="stick"></div>

<style>
  body {
    padding: 42px 122px 0;
    background: #6592CF;
  }
  .bg {
    font-size: 0;
    width: 140px;
    height: 20px;
  }
  .darker {
    background: #060F55;
  }
  .left-margin {
    margin-left: 20px;
  }
  #striped {
    width: 140px;
    height: 70px;
    background: repeating-linear-gradient(
      to right,
      #060F55 0px,
      #060F55 20px,
      #6592CF 20px,
      #6592CF 40px);
  }
  #bottom {
    width: 140px;
    height: 90px;
    background: #060F55;
    border-radius: 0 0 100px 100px;
  }
  .upward-circle {
    width: 20px;
    height: 20px;
    background: #060F55;
    border-radius: 20px 20px 0 0;
    display: inline-block;
  }
  .downward-circle {
    width: 20px;
    height: 20px;
    background: #6592CF;
    border-radius: 0 0 20px 20px;
    display: inline-block;
  }
  #stick {
    width: 20px;
    height: 60px;
    z-index: 1;
    position: relative;
    top: -10px;
    background: #060F55;
    margin-left: 60px;
  }
</style>
```
