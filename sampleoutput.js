const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question('', n => {
          let [a,b] = n.split(' ');
      a = 4;
      b = 5;
      //Write your code here
      LHS=(a+b)**3
      console.log(LHS)
      RHS=(a**3+b**3+3*a**b+3*a*b**2)
      console.log(RHS)
       //if((a+b)**3==(a**3+b**3+3*a**2*b+3*a*b**2))
      readline.close();
    });