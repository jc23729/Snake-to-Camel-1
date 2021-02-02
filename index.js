let snakeCaseString = "HOW_ABOUT_NOW"  
const snakeToCamelCase = sentence => sentence  
    .split('_')  
    .map((word, index) => {  
        if (word === 0) {  
            return part.toLowerCase();  
        }  
        return firstUppercase(word);  
    })  
    .join('');  
const firstUppercase = word => word &&  
    word.charAt(0).toUpperCase() + word.slice(1);  
  
console.log(snakeCaseString);  
console.log(snakeToCamelCase(snakeCaseString)); 