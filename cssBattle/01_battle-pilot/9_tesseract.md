# Target #9 - Tesseract

![Tesseract](https://cssbattle.dev/targets/9.png)

```
<div class="rect inner-circle"></div>
<div class="rect outer-rect"></div>
<div class="rect trans-rect"></div>
<div class="rect rectangle"></div>


<style>
  body {
    background: #222730;
    margin: 0;
  }
  .rect {
    position: fixed;
  }
  .inner-circle {
    width: 50px;
    height: 50px;
    background: #393E46;
    border-radius: 50%;
    margin:125px 175px;
    z-index: 9999;
  }

  .outer-rect {
    width: 150px;
    height: 150px;
    background: #4CAAB3;
    transform: rotate(45deg);
    margin-left:125px;
    margin-top: 75px;
    z-index: 9998;
  }
  .trans-rect {
    width: 250px;
    height: 250px;
    background:#222730;
    transform: rotate(45deg);
    margin-left:75px;
    margin-top: 25px;
    z-index: 9997;
  }
  .rectangle {
    width: 400px;
    height: 150px;
    background-color: #4CAAB3;
    margin-top: 75px;
  }
</style>
```
