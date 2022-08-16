# CSS

`cursor:pointer; - 滑鼠變成手的圖案`

`cursor: not-allowed; - 滑鼠禁止游標`

`cursor: no-drop; - 滑鼠禁止游標 `

`user-select: none; - 禁止反白`

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

`監聽事件 - onFocus(獲得焦點時)`

```js
onFocus
```

`阻止表單默認事件`

```js
e.preventDefault()
```

`將物件轉為陣列`

```js
const people = {
    '001': {
        name: 'Casper',
        like: '鍋燒意麵',
        age: 18,
    },
    '002': {
        name: 'Wang',
        like: '炒麵',
        age: 24,
    },
    '004': {
        name: '滷蛋',
        like: '蘿蔔泥',
        age: 3,
    },
}

1. Object.values() 可以直接傳入一個物件，並將傳入的物件直接轉為陣列的形式。

Object.values(people)
people = (3) [{…}, {…}, {…}]
0: {name: 'Casper', like: '鍋燒意麵', age: 18}
1: {name: 'Wang', like: '炒麵', age: 24}
2: {name: '滷蛋', like: '蘿蔔泥', age: 3}

2. Object.keys() 可以直接傳入一個物件，並將其 key 值以陣列的方式呈現。

3. Object.entries() 可以直接傳入一個物件，並將 key 與 value 以陣列的方式呈現。
```

`requestAnimationFrame`

```js
//requestAnimationFrame用法與setTimeout與setInterval差不多，一樣傳入一個callback，不需傳入秒數，會自動以瀏覽器的更新頻率，requestAnimationFrame(callback)會回傳一個唯一的requestID，可以透過呼叫 cancelAnimationFrame(requestID) 取消此動畫。
let elem = document.getElementById('animate')
let left = 0
let bound = false

requestAnimationFrame(Move)

function Move() {
    if (left === 0 || left === 350) {
        bound = !bound
    }
    bound ? left++ : left--
    elem.style.left = left + 'px'
    window.requestAnimationFrame(Move)
}
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

`useCallback `

```js
const memoizedCallback = useCallback(() => {
    doSomething(a, b)
}, [a, b])

//透過 useCallback 就可以避免因為 Functional Component 每次重新執行後，函式內容明明相同，但卻被判斷為不同，進而導致 useEffect 又再次被呼叫到的情況。
```

`react-Route v6 url選填`

```js
<Route path="/course/add">
    <Route element={<CourseAdd />} path="" />
    <Route element={<CourseAdd />} path=":sid" />
</Route>
```

`React路由跳轉`

```js
useNavigate
const navigate = useNavigate()
navigate('/course/manage', { replace: false })
```

`在React讓資料庫來的資料顯示br的屬性`

```js
dangerouslySetInnerHTML={{
                    __html: start ? courseDetailedData[0].course_content : '',
                }}
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

`修改資料`

```sql
UPDATE `course` SET `course_name` = course_name, `course_price` = course_price, `course_level` = course_level, `course_img_s` = course_img_s, `course_content` = course_content, `course_people` = course_people, `course_material` = course_material WHERE course.course_sid = course_sid;
```

---
