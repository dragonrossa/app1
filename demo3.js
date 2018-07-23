for(i=1;i<5;i++){
	document.write(i+"</br>");
}

var i=5;
for(;i<10;){
	document.write(i+"</br>");
	i++;
}

var i=0;
while (i<=10) {
   document.write(i + "<br />");
   i++;
}

var i=20;
do {  
  document.write(i + "<br />");
  i++;  
}
while (i<=25); 

for(i=1;i<5;i++){
	if(i==3){
	document.write(i+"</br>");
	break;
	}
}

for(i=1;i<5;i++){
	if(i==3){
	
	continue;
	}
	document.write(i+"</br>");
}

var x = 0;
while(x<6) {
  x++;
}
document.write(x);