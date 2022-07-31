// You should implement your task here.

// module.exports = function towelSort (matrix) {
//   return [];
// }


function towelSort(matrix) {
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i] = matrix[i].reverse();
    }
    console.log(matrix.join(','));
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

towelSort(matrix);
