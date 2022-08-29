// 基本類型
let str: string = 'bruce'
let str1: string
str1 = 'bruce2'

let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined

// any不會做檢查,像js一樣
let test: any = true

// 陣列
let arr: string[] = ['a', 'b']

let arr2: string[][] = [['aa', 'bb']]

// 元組
let tuple: [number, string, boolean] = [1, '2', true]
let tuple2: [string, string][] = [['a', 'b']]

// Enum 枚舉

// 開直播api -> 獲取直播狀態
// 成功 失敗 直播中
// 0  -1  1

enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1,
}

const staus = LiveStatus.SUCCESS

// Union
let aaa: number | string
aaa = 1000
aaa = 'str'

// type 無法擴充
type A = number | string
type B = boolean | string

let a1: A
a1 = 999
a1 = 'str'

let b1: B
b1 = true
b1 = '123'

// interface 是可以擴充的
interface User {
    name: string
    age: number
}
interface User2 {
    desc: string
}

// object
type Card = {
    name: string
    desc: string
}

interface Card2 {
    name: string
    age: number
}
interface Card2 {
    desc: string
}

const obj: Card = {
    name: '安安',
    desc: '...',
}

const obj2: Card2 = {
    name: '安安',
    age: 12,
    desc: '...',
}
