const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordLength = 15;

function generateSecurePassword() {
    let password = "";
    let randomIndex;
    const randomIntegers = new Uint32Array(passwordLength);

    window.crypto.getRandomValues(randomIntegers);

    for (let i = 0; i < passwordLength; i++) {
        randomIndex = randomIntegers[i] % characters.length;
        password += characters[randomIndex];
    }

    return password;
}

function putPasswords() {
    document.getElementById("first-password").textContent = generateSecurePassword();
    document.getElementById("second-password").textContent = generateSecurePassword();
}



