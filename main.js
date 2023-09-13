let a=parseInt(prompt("Enter the number of elements"))

document.write(`Number = ${a}<br><br>`)

var sum=0

for(i=1;i<=a;i++){
	sum=sum+i
}

var avg=sum/a
document.write(`sum=${sum}<br>`)
document.write(`Average ${avg}`)