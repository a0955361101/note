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

`visibility`

```
 visible
visibility 屬性的 initial value
產生的 box 是可見的


hidden
產生的 box 是不可見的 (完全透明，不會繪製 (drawn) 在畫面上)
但不可見的 box 還是會影響佈局
如果元素的 descendant 設定 visibility: visible，則它們將是可見的

```

`垂直置中`

```css
1. display: flex;
align-items: center;

2.margin

3. line-height

```

`取消input焦點框框`

```css
outline: none;
```

`增加或減少載入物件的寬度及高度(維持原比例)直到放得進所定義的元素寬高。`

```css
object-fit: contain;
```

`overscroll-behavior`

```css
在手機上的時候有時候可以滑出超過頁面，就會看到背景的白色，或者是有些瀏覽器會有下拉重整的功能，當你在頁面最頂端還往下拉的時候就會變成重新整理。

如果想阻止這個行為，可以用 overscroll-behavior 這個屬性。
```

`平滑捲動`

```css
很久以前這功能可能需要 JS，但現在可以用 CSS 的 scroll-behavior: smooth;
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

`陣列切割`

```js
// chunk - 依size分成子陣列，ex. chunk([1, 2, 3, 4, 5], 2) -> [[1,2],[3,4],[5]]
// https://stackoverflow.com/questions/8495687/split-array-into-chunks
export const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    )
```

`ES6 Object.assign()這個方法來實現淺拷貝`

```js
const object1 = {
    a: 1,
    b: 2,
    c: 3,
}
const object2 = Object.assign({ c: 4, d: 5 }, object1)
console.log(object2)
//  {c: 3, d: 5, a: 1, b: 2}
```

`Array.of()：轉換一組值為陣列，返回新陣列`

```js
Array.of(10, 9, 8)
// [(10, 9, 8)]
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

`yarn run deploy - React github page靜態網頁佈署`

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

### Node.js

`使用 node --version 命令在命令提示符中檢查 Node.js 的當前版本`

`使用 node -v 命令的較短形式將同樣返回當前在你的系統上執行的 Node.js 版本。`

`RESTful API`

```js
`獲取使用者資料` /GET /users
`獲取使用者資料` /GET /user/:id
`新增使用者資料` /POST /user
`更新使用者資料` /PUT /user/:id
`刪除使用者資料` /DELETE /user/:id
```
