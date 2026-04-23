
// ============================================
// STRING VALIDATION & ANAGRAM FUNCTIONS
// ============================================

// anagram
const isanagram = (str1,str2) => {
  const norm = (str)=>{
    return str.toLowerCase().split('').sort().join('')
  }
  return norm(str1)===norm(str2);
}

console.log(isanagram('adbc','cbad'));
// Expected output: true


// ============================================
// STRING ANALYSIS & CHARACTER COUNTING
// ============================================

// caractere occurence
const stringValue = (arr) => {
    let result = {};
    for(const char of arr){
        result[char] = (result[char] || 0) + 1;
    }
    return Object.entries(result)
                .map((a) => a[0]+a[1])
                .join('');
}

console.log(stringValue('aaabbccds'));
// Expected output: a3b2c2d1s1

// ============================================
// BRACKET/PARENTHESES VALIDATION
// ============================================

// valid parenthese
const isValid = (s) => {
    const stack = [];
    const map = {
        ')': '(',  
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        
        if (map[char]) {
            const topElement = stack.length === 0 ? '' : stack.pop();

            if (topElement !== map[char]) {
                return false;
            }
        } else {
            
            stack.push(char);
        }
    }

    
    return stack.length === 0;
};

console.log(isValid('{}()'));
// Expected output: true

// ============================================
// ASCII ART & PATTERN GENERATION
// ============================================

const pyramid = (num) => {
  
  for(let i = 1 ; i <= num ; i++){
    
    
    let str=""
    
    for(let j = 0;j<num-i;j++ ){
      str += ' ';
    }
    
    for(let k = 0; k < 2*i -1;k++ ){
      str += '*';
    }
    
    console.log(str);
  }
}

pyramid(5)
// Expected output:
//     *
//    ***
//   *****
//  *******
// *********

console.log('===================================');
// Expected output: ===================================

const Rpyramid = (num) => {
  
  for(let i = 0 ; i < num ; i++){
    
     
    let str = ""
    
    for(let j = 0;j<i;j++ ){
      str += ' ';
    }
    
    for(let k = (num-i)*2 -1; k > 0;k-- ){
      str += '*';
    }
    
    console.log(str);
  }
}


Rpyramid(5)
// Expected output:
// *********
//  *******
//   *****
//    ***
//     *

// Diamond pattern


const diamond = (num)=>{
  
  for(let i = 1 ; i <= num ; i++){
    
    
    let str=""
    
    for(let j = 0;j<num-i;j++ ){
      str += ' ';
    }
    
    for(let k = 0; k < 2*i -1;k++ ){
      str += '*';
    }
    
    console.log(str);
  }
  
  for(let i = 1 ; i < num ; i++){
    
     
    let str = ""
    
    for(let j = 0;j<i;j++ ){
      str += ' ';
    }
    
    for(let k = (num-i)*2 -1; k > 0;k-- ){
      str += '*';
    }
    
    console.log(str);
  }
}

diamond(5)
// Expected output:
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// X pattern
const drawX = (num) =>{
  
  for(let i = 0 ; i< num ; i++){
    let row = ''
    for(let j = 0 ; j< num ; j++){
      if( i === j || i + j === num-1){
        row += '*'
      }else{
        row += " "
      }
    }
    console.log(row)
  }
}

drawX(7);
// Expected output:
// *     *
//  *   *
//   * *
//    *
//   * *
//  *   *
// *     *

// Z pattern
const  drawZ = (num)=>{
  
  for(let i = 0 ; i< num ; i++){
    let row = ''
    for(let j = 0 ; j< num ; j++){
      if( i === 0 || i + j === num-1 || i === num-1){
        row += '*'
      }else{
        row += " "
      }
    }
    console.log(row)
  }
}

drawZ(7)
// Expected output:
// *******
//      *
//     *
//    *
//   *  
//  *    
// *******

// ============================================
// STRING MANIPULATION & PROTOTYPES
// ============================================


let w = 'hello';
let newstring = '';
for(let i = 0; i < w.length  ;i++){
  newstring = w[i] + newstring ;
}
console.log(newstring)
// Expected output: olleh

String.prototype.nmbr = function(){
  
  let i = 0
  while(this[i] !== undefined){
    
    i++
  }
  return i
}

console.log(w.nmbr())
// Expected output: 5

// ============================================
// STRING ANALYSIS FUNCTIONS
// ============================================

let str = "Le   développement web est fascinant";

function maxlength(str){
  let arr = str.split(' ')
  
  return arr.reduce((acc,n)=> acc.length > n.length ? acc : n ,0);
  
  // let max = 0
  // let result = ''
  // for(let i = 0;i<arr.length;i++){
  //   if(arr[i].length > max){
  //     max = arr[i].length;
  //     result = arr[i]
  //   }
  // }
  
  // return result
}


console.log(maxlength(str))
// Expected output: développement

function countchar(str){
  let result = {}
  for(let i = 0;i<str.length;i++){
    // result[str[i]] = (result[str[i]] ?? 0) + 1
      if(result[str[i]] === undefined){
        result[str[i]] = 1
      }else{
        result[str[i]]++
      }
  }
  return result
}

console.log(countchar(str))
// Expected output: { ' ': 3, 'L': 1, 'e': 3, 'd': 1, 'v': 1, 'l': 1, 'o': 2, 'p': 1, m: 1, 'n': 1, 't': 1, 'w': 1, 's': 1, 'a': 1, 'c': 1, 'i': 1 }

function removeocc(str){
  return [...new Set(str)].join('');
}

console.log(removeocc('aaaabbbccddx'))
// Expected output: abcdx

// ============================================
// ANAGRAM VERIFICATION (Alternative)
// ============================================

function checkAnagrame(str1,str2){
  if(str1.length !== str2.length) return false;
  
   str1 = str1.split('').sort().join('')
   str2 = str2.split('').sort().join('')
  
  for(let i =0;i<str1.length;i++){
    if(str1[i] !== str2[i]) return false
  }
  return true
}

console.log(checkAnagrame('race','Care'))
// Expected output: false (case-sensitive comparison)

// ============================================
// SORTING ALGORITHMS
// ============================================

const data = [23, 45, 16, 37, 3, 99, 22];

const quicksort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  
  const rest = arr.slice(1); 
  const left = rest.filter(x => x <= pivot);
  const right = rest.filter(x => x > pivot);

  return [...quicksort(left), pivot, ...quicksort(right)];
};

const selectionsort = (arr) => {
  let min = 0 
  for(let i = 0 ;i<arr.length;i++){
    min = i
    for(let j = i+1 ;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min = j
      }
    }
    
    [arr[i], arr[min]] = [arr[min], arr[i]]
    
  }
  return arr
}

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
};

const bubblesort = (arr) =>{
  
  for(let i = 0 ; i < arr.length ; i++){
    
    for(let j = 0 ; j < arr.length -i ; j++){
      
      if( arr[j] > arr[j - 1]){
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
      
    }
  }
  return arr
}

const radixSort = (arr) => {
  
  const maxNum = Math.max(...arr);
  let exp = 1;

  while (Math.floor(maxNum / exp) > 0) {
    
    let buckets = Array.from({ length: 10 }, () => []);

    for (let num of arr) {
      let digit = Math.floor(num / exp) % 10;
      buckets[digit].push(num);
    }

    arr = [].concat(...buckets);
    exp *= 10;
  }

  return arr;
};

console.log(radixSort(data));
// Expected output: [ 3, 16, 22, 23, 37, 45, 99 ]

// ============================================
// NUMBER ALGORITHMS
// ============================================

const isArmstrong = (num) => {
  
  let result = 0
  let originalnum = num
  
  while(num > 0){
    result +=  Math.pow((num % 10),3)
    num = Math.floor(num/10)
  }
  return  originalnum === result
}

const isanagram2 = (str1,str2)=>{
  let set1 = new Set(str1)
  let set2 = new Set(str2)
  
  return set1.length === set2.length && set1.isSubsetOf(set2)
}

console.log(isArmstrong(153))
// Expected output: true (1³ + 5³ + 3³ = 153)

const sum = (...numbers)=>{
  return numbers.flat(Infinity).reduce((acc,n) => acc + n,0)
}

console.log(sum([15,20,[50,15]]));
// Expected output: 150


const isperfect = (num)=>{
  let sum = 0
  for(let i = 0;i<num;i++){
    if(num % i === 0){
      sum += i 
    }
  }
  return sum === num
}
console.log(isperfect(28))
// Expected output: true (1 + 2 + 4 + 7 + 14 = 28)

// ============================================
// ARRAY & MATRIX ALGORITHMS
// ============================================

const spiral = (matrix) => {
  const result = [];
  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};

console.log(spiral([ [1,2,3],
                     [4,5,6],
                     [7,8,9]]));
// Expected output : [ 1,2,3,6,9,8,7,4,5 ]

// ============================================
// CUSTOM PROTOTYPES & EXTENSIONS
// ============================================

const splite = (str , char) =>{
  let result = [];
  let j = 0
  for(let i = 0 ; i<str.length;i++){
    
    if(result[j] === undefined){
        result[j]= ''
      }
      
    if(str[i] === char){
      j++
    }else{
      
      result[j] += str[i]
    }
  }
  return result
}

Array.prototype.myReduce = function(callback, initialValue){
  let accumulator = initialValue;
  
  for (let i = 0; i < this.length; i++){
    if (accumulator === undefined) {
      accumulator = this[i];
    } else {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  
  return accumulator;
};
Array.prototype.myMap = function(callback) {
  const result = [];
  
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  
  return result;
};

console.log(splite(str, ' '))
// Expected output: [ 'Le', 'développement', 'web', 'est', 'fascinant' ]


const drawPascalPyramid = (num)=>{
  
  let mat = []
  
  for(let i = 0;i<num;i++){
    let row = []
    for(let j = 0 ; j<=i;j++){
      if(j===0 || j === i){
        row.push(1);
      }else{
        row[j] = mat[i-1][j-1] + mat[i-1][j];
      }
    }
    mat.push(row)
  }
  mat = mat.flat(Infinity)
  let k = 0
  
  for(let i = 0 ;i<num;i++){
    let row = ''
     row += ' '.repeat(num-i-1)
     for(let j = 0;j<=i;j++){
       row += mat[k] + ' '
       k++
     }
     console.log(row)
  }
}

drawPascalPyramid(5)



const flate = (arr)=>{
  
  let result = []
  
  for(let i = 0;i<arr.length;i++){
    if(typeof arr[i] === "object"){
      result.push(...flate(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result
}

console.log(flate([1,3,[5,7,[8]]]))
// Expected output : [1,3,5,7,8]