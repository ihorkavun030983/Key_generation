const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  function generateKey(length, characters) {
    var result = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const key = generateKey(10, characters);
console.log('Згенерований ключ з 10 рандомних символів:',key);