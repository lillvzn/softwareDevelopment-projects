# Target #4 - Ups & Downs

![Ups and Downs](https://cssbattle.dev/targets/4.png)

```
<div class="flex-container">
  <div class="shape shape--reverse"></div>
  <div class="shape shape--normal"></div>
  <div class="shape shape--reverse"></div>
</div>

<style>
  body {
    background: #62306D;
    margin: 50 50;
  }

  .flex-container {
    display: flex;
  }

  .shape {
    width: 100px;
    height: 100px;
    background: #F7EC7D;
  }

  .shape--normal {
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
  }

  .shape--reverse {
    margin-top: 100px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }

</style>
```
