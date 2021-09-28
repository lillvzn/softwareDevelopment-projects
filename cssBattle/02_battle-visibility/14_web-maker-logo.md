# Target #14 - Web Maker Logo

![Web Maker Logo](https://cssbattle.dev/targets/14.png)

```
<div class="tri tri-down"></div>
<div class="tri tri-down--bg"></div>
<div class="tri tri-up"></div>
<div class="tri tri-up--bg"></div>
<style>
  * {
    margin: 0;
  }
  body {
    background: #F2F2B6;
  }
  .tri {
    position: fixed;
    margin-top: 85px;
    width: 0;
	height: 0;
    border-left: 75px solid transparent;
	border-right: 75px solid transparent;
  }
  .tri-down {
    margin-left: 60px;
	border-top: 130px solid #FF6D00;
    z-index: 9999;
  }
  .tri-down--bg {
    margin-left: 80px;
	border-top: 130px solid #FD4602;
  }
  .tri-up {
    margin-left: 170px;
	border-bottom: 130px solid #FD4602;
    z-index: 9999;
  }
  .tri-up--bg {
    margin-left: 190px;
	border-bottom: 130px solid #FF6D00;
  }
</style>
```
