// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    if (matrix.length === 0) {
        return matrix;
    }
    if (matrix === undefined) {
        return matrix;
    }
    for (let k = 0; k < matrix.length; k++) {
        if (k % 2 === 1) {
            let arrMiddle = matrix[k];
            let size = arrMiddle.length;

            for (let i = 0; i < size - 1; i++) {
                let max = i;
                for (let j = i + 1; j < size; j++) {
                    if (arrMiddle[j] > arrMiddle[max]) {
                        max = j;
                    }
                }
                let t = arrMiddle[max];
                arrMiddle[max] = arrMiddle[i];
                arrMiddle[i] = t;
            }
            matrix[k] = arrMiddle;
        }
    }

    let arr = new Array();
    if (matrix[0].length !== undefined) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                arr.push(matrix[i][j]);
            }
        }
    } else {
        arr = matrix;
    }

    return arr;
};
