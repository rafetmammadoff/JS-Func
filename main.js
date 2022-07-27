// Task 1 


do {
    var num=prompt("Task 1 i yoxlamaq ucun eded daxil edin")
} while (!parseInt(num) || num<0);

if (num % 7 == 0) {
    alert("Eded 7 ye bolunur")
}
else if (num % 7 < 4){
    for (;;) {
        num--; 
        if (num%7==0) {
            break;
        }   
         
    }
    alert(`${num} 7 ye tam bolunur`)
}
else{
    for (;;) {
        num++; 
        if (num%7==0) {
            break;
        }   
         
    }
    alert(`${num} 7 ye tam bolunur`)
}



// Task 2

do {
    var num1=prompt("Task 2 ni yoxlamaq ucun eded daxil edin")
} while (!parseInt(num1) || num1<0);
if (num1>0 && num1<50) {
    var count=0;
    for (let a = 1; a <= num1; a++) {
        if (a % 3 == 0) {
            count++;
        }
    }
    alert(`${num1} ededine qeder ${count} sayda 3 e bolunen eded var`)
}
else if (num1>49 && num1<100) {
    var count=0;
    for (let a = 1; a <= num1; a++) {
        if (a % 5 == 0) {
            count++;
        }
    }
    alert(`${num1} ededine qeder ${count} sayda 5 e bolunen eded var`)
}
else{
    var count=0;
    for (let a = 1; a <= num1; a++) {
        if (a % 8 == 0) {
            count++;
        }
    }
    alert(`${num1} ededine qeder ${count} sayda 8 e bolunen eded var`)
}