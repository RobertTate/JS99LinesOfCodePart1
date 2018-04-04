

let friends = ['THOMAS', 'IVES', 'JUSTIN', 'CHRIS', 'KENNY'];


for (let f = 0; f < friends.length; f++) {
    console.log(`${friends[f]}:`);
    for (let i = 10; i >= 1; i--) {
        if (i == 1) {
            console.log(`${(i)} line of code in the file, ${(i)} line of code; ${friends[0]} strikes one out, clears it all out, 0 lines of code in the file`);
        } else {
            console.log(`${(i)} lines of code in the file, ${(i)} lines of code; ${friends[0]} strikes one out, clears it all out, ${(i - 1)} lines of code in the file`);   
        }
    } 
};
