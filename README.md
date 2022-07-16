# CSS

`cursor:pointer; - 滑鼠變成手的圖案`

`字數限制...`

```css
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2; /*限制行數 */
-webkit-box-orient: vertical;
white-space: normal;
```

---

# JavaScript

`監聽window scrollTop`

```js
window.onscroll = function () {
    const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop < 798) {
        setFixedRemoteControl(false)
    } else {
        setFixedRemoteControl(true)
    }
}
```

---
