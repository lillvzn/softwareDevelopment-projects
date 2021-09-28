# Target #11 - Eye Of Sauron

![Eye Of Sauron](https://cssbattle.dev/targets/11.png)

```
<div class="circ circ--main"></div>
<div class="circ circ--trans"></div>
<div class="circ circ--sm"></div>
<div class="circ circ--half-lt"></div>
<div class="circ circ--trans-lt"></div>
<div class="circ circ--half-rt"></div>
<div class="circ circ--trans-rt"></div>
<div class="rect rect--top"></div>
<div class="rect rect--bottom"></div>

<style>
  body {
    background: #191210;
    margin: 0 auto;
  }
  .circ {
    position: fixed;
    border-radius: 50%;
    background: #ECA03D;
    margin: 80px 0;
  }
  .circ--main {
    height: 140px;
    width: 140px;
    margin-left: 130px;
    z-index: 9997;
  }
  .circ--trans {
    height: 100px;
    width: 100px;
    margin-top: 100px;
    margin-left: 150px;
    background: #191210;
    z-index: 9998;
  }
  .circ--sm {
    height: 50px;
    width: 50px;
    margin-top: 125px;
    margin-left: 175px;
    background: #84271C;
    z-index: 9999;
  }
  .circ--half-lt,
  .circ--half-rt{
    height: 100px;
    width: 100px;
    margin-top: 100px;
    margin-left: 50px;
    background: #ECA03D;
    z-index: 9995;
  }
   .circ--half-rt{
    margin-left: 250px;
  }
  .circ--trans-lt,
  .circ--trans-rt{
    height: 60px;
    width: 60px;
    margin-top: 120px;
    margin-left: 70px;
    background: #191210;
    z-index: 9996;
  }
  .circ--trans-rt {
    margin-left: 270px;
  }
  .rect {
    position: fixed;
  }
  .rect--top,
  .rect--bottom {
    height: 100px;
    width: 100px;
    margin-top: 50px;
    margin-left: 50px;
    background: #191210;
    z-index: 9995;
  }
  .rect--bottom {
    margin-top: 150px;
    margin-left: 250px;
  }

</style>
```
