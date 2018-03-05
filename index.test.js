
const getOpeningSum = require('./questions/1.getOpeningSum')
const perfectSquare = require('./questions/2.perfectSquare')
const reversed = require('./questions/3.reversed')
const unique = require('./questions/5.unique')
const findIndex = require('./questions/6.findIndex')
const Data = [
    {
        name: '草山金工',
        isOpen: false,
        item:[
            {
                id: 100,
                isCkecked: true,
                price: 2200
            }
        ]
    },
    {
        name: '高雄樂料理 - 各國料理新手入門課',
        isOpen: true,
        item:[
            {
                id: 101,
                isCkecked: true,
                price: 1000
            },
            {
                id: 102,
                isCkecked: true,
                price: 800
            }
        ]
    },
    {
        name: '台灣也能玩滑雪！專業教練帶你玩雪板 ',
        isOpen: true,
        item: [
            {
                id: 103,
                isCkecked: false,
                price: 1000
            },
            {
                id: 104,
                isCkecked: true,
                price: 2500
            },
            {
                id: 105,
                isCkecked: false,
                price: 1100
            }
        ]
    },
    {
        name: '四季甜美盛開 - 不凋花花藝課 ',
        isOpen: true,
        item: [
            {
                id: 106,
                isCkecked: false,
                price: 500
            }
        ]
    },
    
]

describe('GetOpeningSum', () => {
    it('should return opening items sum', () => {
        expect(getOpeningSum(Data)).toEqual(4300)
    })
})

describe('PerfectSquare', () => {
    it('should return true while is perfectSquare', () => {
        expect(perfectSquare(25)).toBe(true)
    })
    it('should return false while is not perfectSquare', () => {
        expect(perfectSquare(26)).toBe(false)
    })
})

describe('Reversed', () => {
    it('should return reversed word', () => {
        expect(reversed('Apple')).toBe('elppA')
    })
})

describe('Unique', () => {
    it('should return the unique value in array ', () => {
        expect(unique[1,1,2,2,3]).toEqual([1,2,3])
    })
})

describe('FindIndex', () => {
    it('should return the index of the first element in an array ', () => {
        expect([1,2,3,4,5].findIndex((element) => element === 3)).toEqual(2)
    })
})

