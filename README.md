# CSS

`cursor:pointer; - 滑鼠變成手的圖案`

`cursor: not-allowed; - 滑鼠禁止游標`

`cursor: no-drop; - 滑鼠禁止游標 `

`字數限制...`

```css
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2; /*限制行數 */
-webkit-box-orient: vertical;
white-space: normal;
```

---

# HTML

`input - 多檔上傳 (multiple)`
`input - 表示必填 (required)`

```html
<input type="file" name="file[]" multiple="multiple" required="required" />
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

`取得網址裡的值`

```js
// 取得網址裡的sid - 格式: ?transactionId=2022073000722545810&orderId=82
const getSid = window.location.href
const url = new URL(getSid)
url.searchParams.get('orderId')
const courseSid = url.searchParams.get('orderId')
console.log(courseSid)
// courseSid = 82
```

`刷新當前頁面`

```js
window.history.go(0)
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

`react-Route v6 url選填`

```js
<Route path="/course/add">
    <Route element={<CourseAdd />} path="" />
    <Route element={<CourseAdd />} path=":sid" />
</Route>
```

---

# SQL 語法

`外鍵搜尋`

```sql
SELECT * FROM`主表單`
JOIN 要連結的表單
ON `主表單`.`主表的外鍵欄位` = `要連結的表單`.`要連結的表單的PK`
```

`新增資料`

```sql
-- 幾個值就要幾個?
INSERT INTO `要新增資料的表單`(`course_name`, `course_price`, `course_level`, `course_img_s`, `course_content`, `course_people`, `course_material`) VALUES (?,?,?,?,?,?,?)
```

`刪除資料`

```sql
DELETE FROM `course` WHERE `course`.`course_sid` = 136
```

---
