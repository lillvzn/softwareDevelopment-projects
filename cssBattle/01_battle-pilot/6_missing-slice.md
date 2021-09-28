# Target #6 - Missing Slice

![Missing Slice](https://cssbattle.dev/targets/6.png)

```
<div class="root">
  <div class="item color-1"></div>
  <div class="item color-2"></div>
</div>
<div class="item color-3"></div>

<style>
  * {
    margin: 0;
    padding: 0;
    background: #E3516E
  }
  .root {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items:center;
  }

  .item {
    height: 100px;
    width: 100px;
    border-top-left-radius: 150%;
  }

  .color-1 {
    background: #51B5A9;
  }
  .color-2 {
    background: #FADE8B;
    transform: rotate(90deg)
  }

  .color-3 {
    background: #F7F3D7;
    transform: rotate(-90deg);
      margin: 0 100px;
  }
</style>
```
