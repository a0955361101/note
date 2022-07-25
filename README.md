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

`監聽window scrollTop - 滾動事件`

```js
// onscroll滾動事件
window.onscroll = function () {
    const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
    // 798可以替換任何數字
    if (scrollTop < 798) {
        setFixedRemoteControl(false)
    } else {
        setFixedRemoteControl(true)
    }
}
```

`平滑移動視窗 - behavior: "smooth"`

```js
window.scrollTo({ top: pathArr[i] + 200, behavior: 'smooth' })
```

---

# React

`useParams - 取得url上的值`

```js
const { sid } = useParams()
console.log(sid)
    // sid = 1
<Route path="/course/detailed/:sid" element={<CourseDetailed />} />
`http://localhost:3000/course/detailed/1`
```

---

# SQL 語法

`外鍵搜尋`

```sql
SELECT * FROM`主表單`
JOIN 要連結的表單
ON `主表單`.`主表的外鍵欄位` = `要連結的表單`.`要連結的表單的PK`
```

---
