let emp = new Array();

emp[0] = 'suraj'
emp[1] = 'kedar'
emp[2] = 'omkar'
emp[3] = 'amit'

for(let i=0; i<emp.length; i++){
    console.log(`${emp[i]}`);
}

// also we can declare as parameterized constructor

let color = new Array('red', 'blue', 'green', 'orange');
for(let i=0; i<color.length; i++){
    console.log(`${color[i]}`);
}