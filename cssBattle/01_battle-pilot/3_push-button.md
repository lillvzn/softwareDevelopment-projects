# Target #3 - Push Button

![Push Button](https://cssbattle.dev/targets/3.png)

```
<div class="circ inner-circle"></div>
<div class="circ outer-circle"></div>
<div class="circ trans-circle"></div>
<div class="circ rectangle"></div>
<style>
  body {
    background: #6592CF;
    margin: 50 50;
    padding: 0;
    box-sizing: border-box;
  }
  .circ {
    position: fixed;
  }
  .inner-circle {
    width: 50px;
    height: 50px;
    background: #EEB850;
    border-radius: 50%;
    margin:75px 125px;
    z-index: 9999;
  }

  .outer-circle {
    width: 150px;
    height: 150px;
    background: #243D83;
    border-radius: 50%;
    margin-left:75px;
    margin-top: 25px;
    z-index: 9998;
  }
  .trans-circle {
    width: 250px;
    height: 250px;
    background: #6592CF;
    border-radius: 50%;
    margin-left:25px;
    margin-top: -25px;
    z-index: 9997;
  }

  .rectangle {
    width: 300px;
    height: 150px;
    background-color: #243D83;
    margin-top: 25px;
  }
</style>
```
