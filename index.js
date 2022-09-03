function shout(string) {
    return "Hello".toUpperCase();
}
function whisper(string) {
    return "hello".toLowerCase();
}
function logShout(string) {
    console.log("hello".toUpperCase());
} 
function  logWhisper(string) {
    console.log("hello".toLowerCase());
}  

function sayHiToHeadphonedRoommate(string) { 
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if (string === "Let's have dinner together!") {
        return "I would love to!"
    }

  }
  
  
  
  
  