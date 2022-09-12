# CSS

`cursor:pointer; - 滑鼠變成手的圖案`

`cursor: not-allowed; - 滑鼠禁止游標`

`cursor: no-drop; - 滑鼠禁止游標 `

`user-select: none; - 禁止反白`

`pointer-events-none - 穿透div`

`word-break:break-all - 針對字母與數字不會自動換行的問題`

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

`防止圖片變形`

```css
object-fit: cover;
object-position: center;
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

`reverse()`

```js
reverse() 方法會*原地（in place）*反轉（reverses）一個陣列。陣列中的第一個元素變為最後一個，而最後一個元素則變成第一個。
     console.log((123 + "").split("").reverse().join(""));
    //  結果為'321'
```

`Event Loop(事件循環)`

```js
consloe.log('a')
setTimeout(() => {
    consloe.log('b')
}, 0)
consloe.log('c')
// 結果會是
// a
// c
// b

1.首先 console.log('a');、setTimeout(() => console.log('b'), 0); 與 console.log('c'); 會被放在一個地方，稱之為 Call Stack

2.那麼接下來 JavaScript 會將 setTimeout(() => console.log('b'), 0); 放到 Event Table 註冊這個事件

3.這邊 Event Table 會將 setTimeout 紀錄 0 秒後執行並放在 Event Table 中，當放在 Event Table 的函式時間到了之後，就會將 Event Table 中這個函式放到 Event Queue 等待被丟回 Call Stack ， 所以 Event Queue 也就是一個緩衝區，準備回到 Call Stack 的地方。

4.接下來會有一個機制一直監聽 Event Queue 裡面有沒有東西要丟出來到 Call Stack，當若有東西的話它就會丟到 Call Stack

5.當發現裡面若有東西時，它就會將結果丟回到 Call Stack


```

`閉包`

```js
function myMoney(price) {
    let money = 1000
    return (money = money - price)
}
let count = myMoney

// JavaScript 再運作之後並沒有建立 function myMoney 給變數 count，所以當每次我執行 count(); 都是在建立新的執行環境，這也是為什麼 money 總是等於 1000$。

那閉包呢?前面有講到 閉包就是一個 function 中回傳 function。

function myMoney() {
  let money = 1000;
  return function(price) {
    return money = money - price;
  }
}

let count = myMoney();

count(100)
// 900
count(50)
// 850
count(700)
// 150

// 其實在 JavaScript 創造階段時，function myMoney 就被創造執行環境，並儲存在變數 count 中，所以因為這個樣子 myMoney 裡面的變數 money 被儲存在記憶體中，當每次執行 count() 時也就可以更新變數 money。
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

`useCallback 跟 useMemo 有什麼不同`

```js
useCallback 回傳 callBack function，所以可以傳參數進去
useMemo 回傳值
useCallback(fn, deps) 等同於 useMemo(() => fn, deps)
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

### tailwind

`tailwind.config.js 設定`

```js
content: ["src/**/*.js", "src/**/*.jsx", "src/*.js", "src/*.jsx", "src/**/*.html", "src/*.html"],
```

### TypeScript

`創建一個typescript-react專案 : create-react-app {name} --template typescript`

`布林值 boolean`

```js
let isDone: boolean = false
```

`數值 number`

```js
let numBer: number = 0
```

`字串 string`

```js
let myName: string = 'Bill'
```

`空值 JavaScript 沒有空值（Void）的概念，在 TypeScript 中，可以用 void 表示沒有任何返回值的函式`

```js
function alertName(): void {
    alert('My name is Tom')
}
// 宣告一個 void 型別的變數沒有什麼用，因為你只能將它賦值為 undefined 和 null：
let unusable: void = undefined
```

`null和undefined`

```js
let u: undefined = undefined
let n: null = null

// 與 void 的區別是，undefined 和 null 是所有型別的子型別。也就是說 undefined 型別的變數，可以賦值給 number 型別的變數：

// 這樣不會報錯
let num: number = undefined

// 這樣也不會報錯

let u: undefined
let num: number = u

// 而 void 型別的變數不能賦值給 number 型別的變數：

let u: void
let num: number = u

// Type 'void' is not assignable to type 'number'.
```

`任意值 any`

```js
// 任意值（Any）用來表示允許賦值為任意型別。
// 如果是一個普通型別，在賦值過程中改變型別是不被允許的：

let myFavoriteNumber: string = 'seven'
myFavoriteNumber = 7

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 但如果是 any 型別，則允許被賦值為任意型別。

let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7

// 可以認為，宣告一個變數為任意值之後，對它的任何操作，返回的內容的型別都是任意值。
```

`型別推論`

```js
// 如果沒有明確的指定型別，那麼 TypeScript 會依照型別推論（Type Inference）的規則推斷出一個型別。
// 以下程式碼雖然沒有指定型別，但是會在編譯的時候報錯：

let myFavoriteNumber = 'seven'
myFavoriteNumber = 7

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

`聯合型別`

```js
// 聯合型別使用 | 分隔每個型別。
// 聯合型別（Union Types）表示取值可以為多種型別中的一種。
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7
```

`物件的型別 - 介面`

```js
// 在 TypeScript 中，我們使用介面（Interfaces）來定義物件的型別。
// 賦值的時候，變數的形狀必須和介面的形狀保持一致。

interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
}

可選屬性
// 可選屬性的含義是該屬性可以不存在
// 有時我們希望不要完全匹配一個形狀，那麼可以用可選屬性 (?)：

interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom',
}

任意屬性
// 有時候我們希望一個介面允許有任意的屬性，可以使用如下方式：
// 使用 [propName: string] 定義了任意屬性取 string 型別的值。
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male',
}

// 一旦定義了任意屬性，那麼確定屬性和可選屬性的型別都必須是它的型別的子集：

interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male',
}

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.

// 上例中，任意屬性的值允許是 string，但是可選屬性 age 的值卻是 number，number 不是 string 的子屬性，所以報錯了。
// 另外，在報錯資訊中可以看出，此時 { name: 'Tom', age: 25, gender: 'male' } 的型別被推斷成了 { [x: string]: string | number; name: string; age: number; gender: string; }，這是聯合型別和介面的結合。

唯獨屬性
// 有時候我們希望物件中的一些欄位只能在建立的時候被賦值，那麼可以用 readonly 定義唯讀屬性：

interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
// 使用 readonly 定義的屬性 id 初始化後，又被賦值了，所以報錯了。
```

`陣列的型別`

```js
// 在 TypeScript 中，陣列型別有多種定義方式，比較靈活。
// 最簡單的方法是使用「型別 + 方括號」來表示陣列：

let fibonacci: number[] = [1, 1, 2, 3, 5]
// 陣列的項中不允許出現其他的型別：
let fibonacci: number[] = [1, '1', 2, 3, 5]
// Type 'string' is not assignable to type 'number'.

陣列泛型
let fibonacci: Array<number> = [1, 1, 2, 3, 5]

用介面表示陣列
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5]
// NumberArray 表示：只要索引的型別是數字時，那麼值的型別必須是數字。
// 雖然介面也可以用來描述陣列，但是我們一般不會這麼做，因為這種方式比前兩種方式複雜多了。
// 不過有一種情況例外，那就是它常用來表示類別陣列。

類別陣列
// 類別陣列（Array-like Object）不是陣列型別，比如 arguments：

function sum() {
    let args: number[] = arguments
}

// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
// 上例中，arguments 實際上是一個類別陣列，不能用普通的陣列的方式來描述，而應該用介面：

function sum() {
    let args: {
        [index: number]: number,
        length: number,
        callee: Function,
    } = arguments
}

any在陣列中的應用
// 一個比較常見的做法是，用 any 表示陣列中允許出現任意型別：
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }]
```

`函式的型別`

```js
// 在 JavaScript 中，有兩種常見的定義函式的方式——函式宣告（Function Declaration）和函式表示式（Function Expression）：

// 函式宣告（Function Declaration）
function sum(x, y) {
    return x + y
}

// 函式表示式（Function Expression）
let mySum = function (x, y) {
    return x + y
}

// 一個函式有輸入和輸出，要在 TypeScript 中對其進行約束，需要把輸入和輸出都考慮到，其中函式宣告的型別定義較簡單：

function sum(x: number, y: number): number {
    return x + y
}

函式表示式
// 如果要我們現在寫一個對函式表示式（Function Expression）的定義，可能會寫成這樣：

let mySum = function (x: number, y: number): number {
    return x + y
}

// 這是可以透過編譯的，不過事實上，上面的程式碼只對等號右側的匿名函式進行了型別定義，而等號左邊的 mySum，是透過賦值操作進行型別推論而推斷出來的。如果需要我們手動給 mySum 新增型別，則應該是這樣：

let mySum: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y
}

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的型別定義中，=> 用來表示函式的定義，左邊是輸入型別，需要用括號括起來，右邊是輸出型別。
// 在 ES6 中，=> 叫做箭頭函式，應用十分廣泛。

用介面定義函式的形狀

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}

可選引數
// 前面提到，輸入多餘的（或者少於要求的）引數，是不允許的。那麼如何定義可選的引數呢？
// 與介面中的可選屬性類似，我們用 ? 表示可選的引數：

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}
let tomcat = buildName('Tom', 'Cat')
let tom = buildName('Tom')

引數預設值
// 在 ES6 中，我們允許給函式的引數新增預設值，TypeScript 會將添加了預設值的引數識別為可選引數：

function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName
}
let tomcat = buildName('Tom', 'Cat')
let tom = buildName('Tom')
```
