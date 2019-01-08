
var doLoop = true;
var counter = 0;
// while (counter < 5) {
//     console.log('msg from inside the loop');
//     counter++; // counter = counter + 1;
// }

// for (var i = 0; i < 5; i++) {
//     console.log('i = ' + i);
//     if (i > 2) {
//         continue;
//         console.log('after continue');
//     }
//     console.log('msg from inside the loop');
// }

for (var i = 0; i < 5; i++) {
    console.log('i = ' + i);
    if (i > 2) {
        break;
        console.log('after continue');
    }
    console.log('msg from inside the loop');
}

