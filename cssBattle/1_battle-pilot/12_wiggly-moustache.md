# Target #12 - Wiggly Moustache

![Wiggly Moustache](https://cssbattle.dev/targets/12.png)

```
<style>
  body {
    background: #F5D6B4;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #half-cir {
    width: 60px;
    height: 30px;
    border: 20px solid #D86F45;
  }

  #half-cir:nth-of-type(odd) {
    border-radius: 0 0 99px 99px;
    border-top: none;
    margin-top: 50px;
  }

  #half-cir:nth-of-type(1)>div,
  #half-cir:nth-of-type(3)>div {
    background: #D86F45;
    width: 20px;
    height: 10px;
    border-radius: 99px 99px 0 0;
  }

  #half-cir:nth-of-type(1)>div {
    margin: -10px 0 0 -20px;
  }

  #half-cir:nth-of-type(3)>div {
    margin: -10px 0 0 60px;
  }

  #half-cir:nth-of-type(even) {
    border-radius: 99px 99px 0 0;
    border-bottom: none;
    margin: -50px -20px 0 -20px;
  }
</style>

<div id="half-cir">
  <div></div>
</div>
<div id="half-cir"></div>
<div id="half-cir">
  <div></div>
</div>
```
