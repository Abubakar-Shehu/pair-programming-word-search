const wordSearch = (letters, word) => { 
   
    const vertical = transpose(letters);
    
    const verticalJoin = vertical.map(vls => vls.join(''))
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (const vl of verticalJoin) {
        if (vl.includes(word)) return true
    }

    return false
}

// check vertical
const transpose = function(matrix) {
    // Replace this code with your solution
    let returnmatrix = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      let innerArray = [];
      for (const col of matrix) {
        innerArray.push(col[i]);
      }
      returnmatrix.push(innerArray);
    }
  
    return returnmatrix;
};

// check if the word is found, and return false if not found

module.exports = wordSearch

