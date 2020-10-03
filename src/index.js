// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = []
    if (matrix === undefined) return result 
    flag=true
    matrix.forEach(element => {
        if (flag) {
            element.sort(function (a, b) {
                return a - b
            })
            flag = false
        } else {
            element.sort(function (a, b) {
                return b - a
            })
            flag = true
        }
        result = result.concat(element)
    });
    return result;
}
