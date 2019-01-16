var myPen = {
    color: 'blue',
    height: 100,
    radius: 10
}

for (var key in myPen) {
    console.log(key); // property name
    var element = myPen[key];// myPen.color === myPen.['color'];
    console.log(element); // value for property - key
}