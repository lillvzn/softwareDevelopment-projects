# Target #18 - Matrix

![Matrix](https://cssbattle.dev/targets/18.png)

```
<div class="grid">
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
  <div class="shape"></div>
</div>
<style>
  body {
    background: #5C434C;
    margin: 0;
  }
  .grid {
    margin-top: 10px;
    margin-left: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 20px;
    align-content: center;
    justifycontent: center;
  }
  .shape {
    width: 80px;
    height: 80px;
    border-top-left-radius: 150%;
  }
  .shape:nth-child(1),
  .shape:nth-child(3),
  .shape:nth-child(6),
  .shape:nth-child(8),
  .shape:nth-child(9),
  .shape:nth-child(11){
    background:#F09462;
  }
  .shape:nth-child(2),
  .shape:nth-child(4),
  .shape:nth-child(5),
  .shape:nth-child(7),
  .shape:nth-child(10),
  .shape:nth-child(12){
    background:#F5D6B4
  }

</style>
```
