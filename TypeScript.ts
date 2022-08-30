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

// function
// 參數
// function hello(){}
function hello(a: string, b: string) {
    return a + b
}

function hello2(a: string, b: string): number {
    console.log(a, b)
    return 123
}

function hello3(a: number, b: boolean, c: string) {
    return 100
}

// undefined
// 可選參數必須放在最後面 name?: string
function test2(a: string) {
    console.log(a)
}
function hello4(age: number, name?: string) {
    // let a: string
    // a = name
    if (name === undefined) {
        return
    }
    test2(name)
    return name
}

// 箭頭函式
const func = () => {}

const func2 = () => {
    return 10
}

// 斷言 unknown
type Data = {
    userId: number
    id: number
    title: string
    completed: boolean
}

async function getDate() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = (await res.json()) as Data
}

const data1: Data = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
}

type Beta = {
    name: string
}

// 假設data1是動態的
const Beta = data1 as unknown as Beta

// class

// 成員
// private 私有
// public 公開
// protected 受保護

class Live {
    public roomName: string
    private id: string
    protected name: string

    constructor(roomName1: string, id1: string, name1: string) {
        console.log('建立直播中')
        this.roomName = roomName1
        this.id = id1
        this.name = name1
    }
}

class CarLive extends Live {
    constructor(roomName1: string, id1: string, name1: string) {
        super(roomName1, id1, name1)
    }
    start() {
        super.name
    }
}

const live = new Live('1號', '000001', 'bruce')
const carLive = new CarLive('car room', '000002', 'bruce2')

class Live2 {
    // 私有變數
    #name
    constructor(name: string) {
        this.#name = name
    }
}

const live2 = new Live2('live2')

export interface CarProps {
    name: string
    age: number
    start: () => void
}

class Car implements CarProps {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    start() {}
}
