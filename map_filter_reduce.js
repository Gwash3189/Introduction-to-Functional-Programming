const arr = [1, 2, 3]

arr.filter(n => n % 2) // [2]
arr.filter(n => !!(n % 2)) // [1, 3]

arr.map(n => n * 2) // [2, 4, 6]

arr.reduce((n, total) => total + n, 0) // 6
