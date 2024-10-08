   function divide(a, b) {
       if (b === 0) throw new Error("Cannot divide by zero");
       return a / b;
   }

   function isEven(num) {
       return num % 2 === 0;
   }

   module.exports = { divide, isEven };
   
