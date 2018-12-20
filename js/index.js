const a = parseFloat(prompt('Enter A'));
   const b = parseFloat(prompt('Enter B'));
   const c = parseFloat(prompt('Enter C'));

   function quadraticEq()
   {
      let d;
      let x;
      let x3;
      let x4;
      if ("ax2 + bx + c = 0")
      {
         d = b * b - (4 * a * c);
         alert("d  дискримінант  =" + d)
      }
      if (d > 0) {
         x3 = (-b + Math.sqrt(d)) / (2 * a);
         x4 = (-b - Math.sqrt(d)) / (2 * a);
         return "x1 = " + x3 + ", x2 = " + x4;
      }
      else if (d < 0) {
         return ("x не має корнев");
      }
      else if (d === 0) {
         x = -b /( 2 * a);         ;
         return "x =" + x;
      }
      else {
         alert("Вихід з програим !!")
      }
   }
   alert(quadraticEq(a, b, c));