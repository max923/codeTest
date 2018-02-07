/**
 * Get the item's price sum ,except isOpen being false or isCkecked
 * Ex getOpeningSum(data) -> 4300 
 */
const data = [
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
const getOpeningSum = (data) => {

}
module.exports = getOpeningSum
