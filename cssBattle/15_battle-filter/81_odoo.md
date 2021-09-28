# Target #81 - Odoo

![Odoo](https://cssbattle.dev/targets/81.png)

```
<div class="rect"></div>
<div class="circ--sm"></div>
<div class="circ">
  <div>
    <div class="circ--purple"></div>
    <div class="circ--purple-in"></div>
  </div>
  <div>
    <div class="circ--grey"></div>
    <div class="circ--grey-in-1"></div>
  </div>
  <div>
    <div class="circ--grey"></div>
    <div class="circ--grey-in-2"></div>
  </div>
  <div>
    <div class="circ--grey"></div>
    <div class="circ--grey-in-3"></div>
  </div>
</div>

<style>
  body {
    margin: 0;
    background: #191919;
  }
  .circ {
    margin-top:122px;
    margin-left: 37px;
    display: flex;
    column-gap:2px;
    position: relative;
  }
  .circ--purple,
  .circ--grey {
    width: 80px;
    height: 80px;
    border-radius:50%;
    background: #8F8F8F;
  }
  .circ--purple {
    background: #714B67;
  }
  .circ--purple-in,
   .circ--grey-in-1,
   .circ--grey-in-2,
   .circ--grey-in-3 {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 20;
    left: 20;
    border-radius:50%;
    background: #191919;
  }
  .circ--grey-in-1 {
    left: 102;
  }
  .circ--grey-in-2 {
    left: 184;
  }
  .circ--grey-in-3 {
    left: 266;
  }
  .rect,
  .circ--sm{
    position: absolute;
    height: 50px;
    width: 20px;
    background:#8F8F8F;
    left: 179;
    top: 110;
  }
  .circ--sm {
    height: 20px;
    border-radius: 50%;
    top: 102;
  }
</style>
```
