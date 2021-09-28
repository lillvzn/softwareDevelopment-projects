# Target #10 - Cloaked Spirits

![Cloaked Spirits](https://cssbattle.dev/targets/10.png)

```
<div class="rect">
  <div>
    <div class="rect--size"></div>
    <div class="circ--outer"></div>
    <div class="circ--inner circ-in--extra"></div>
  </div>
  <div>
    <div class="rect--size rect--center"></div>
    <div class="circ--outer circ--center"></div>
    <div class="circ--inner circ-in--center"></div>
  </div>
  <div>
    <div class="rect--size"></div>
    <div class="circ--outer"></div>
    <div class="circ--inner circ-in--extra-1"></div>
  </div>
</div>

<style>
  body {
    background: #62306D;
    margin: 0 auto;
  }
  .rect,
  .circ {
    position: relative;
    margin-top: 200px;
    display: flex;
    justify-content: center;
  }
  .rect--size {
    width: 100px;
    height: 100px;
    background:#F7EC7D;
  }
  .rect--center,
  .circ--center{
    margin-top: -100px;
    height: 200px;
  }
  .circ--outer {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    top: -50px;
    background:#AA445F;
  }
  .circ--center {
    background: #E38F66 !important;
  }
  .circ--inner {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    top: -30px;
    background:#E38F66;
    z-index: 9999;
  }
  .circ-in--center {
    background: #AA445F;
    top: -130px;
    left: 170px;
  }
  .circ-in--extra {
    left: 70px;
  }
  .circ-in--extra-1 {
    right: 70px;
  }
</style>
```
