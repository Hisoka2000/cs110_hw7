const caesarShift = function(str, amount) {
    let ciphertext = "";
    for(let i = 0; i < str.length; i++) {
        let plainCharacter = str.charCodeAt(i);
        if(plainCharacter >= 97 && plainCharacter <= 122) {
            ciphertext += String.fromCharCode((plainCharacter - 97 + amount) % 26 + 97);
        } 

        if(plainCharacter >= 65 && plainCharacter <= 90) {
            ciphertext += String.fromCharCode((plainCharacter - 65 + amount) % 26 + 65);
        } 

        else {
            ciphertext += String.fromCharCode(plainCharacter);
        }
    }
    return ciphertext;
}
