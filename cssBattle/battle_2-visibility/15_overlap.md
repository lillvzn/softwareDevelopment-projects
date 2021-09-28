# Target #15 - Overlap

![Overlap](https://cssbattle.dev/targets/15.png)

```
<div class="circ circ--1"></div>
<div class="circ circ--2"></div>
<div class="mid"></div>
<style>
  body {
    background: #09042A;
  }
  .circ {
    position: fixed;
    margin-top: 67px;
    margin-left: 67px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .circ--1 {
    background: #7B3F61;
  }
  .mid {
    margin-top: 102px;
    margin-left: 152px;
    position: fixed;
    width: 80px;
    height: 80px;
    background: #09042A;
    border-top-right-radius: 95%;
    border-bottom-left-radius: 95%;
    transform: rotate(45deg)
  }
  .circ--2 {
    margin-left: 167px;
    background: #E78481;
  }
</style>
```
