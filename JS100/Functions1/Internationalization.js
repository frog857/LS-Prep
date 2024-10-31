// Type JavaScript here and click "Run Code" or press Ctrl + s

console.log('Hello, world!');

function greet(langCode) {
  switch (langCode) {
    case 'en': return "Hello!"
    case 'de': return "Hallo!"
    case 'ko': return "Hannaseyoo~"
    case 'ru': return "Privyet"
  }
}

function localGreet(locale) {
  let language = extractLanguage(locale)
  let region = extractRegion(locale)
  
    switch (region) {
      case 'US': return "Hi there!"
      case 'GB': return "Hello there, chap"
      case 'AU': return "G'day!"
      default: return greet(language)
  }
}

function extractLanguage(locale) {
  return locale.slice(0,2)
}

function extractRegion(locale) {
  return locale.split('_')[1]
    					 .split('.')[0];
}

console.log(localGreet("en_US"))
console.log(localGreet("en_GB"))
console.log(localGreet("en_EX"))
console.log(localGreet("ko_EX"))
console.log(localGreet("de_EX"))



