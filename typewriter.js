//const sentence = "I come from the net. Through systems, peoples and cities to this place: Mainframe. My format: Guardian; to mend and defend. To defend my new-found friends, their hopes and dreams. To defend them from their enemies. They say the user lives outside the net and inputs games for pleasure. No one knows for sure, but I intend to find out. Reboot!";

const sentence = "I live in the games. I search through systems, peoples, and cities, for this place—Mainframe, my home. My format: I have no format. I am a renegade, lost on the net. Reboot!";

//const sentence = "I come from the Net. Infecting systems, people, and cities, to this place—Megaframe, my domain. My format: Virus. To corrupt and conquer!";

//const sentence = "I look to the net. I search through systems, peoples and cities, for these sprites: My family. My format: Command.com of what was once Mainframe. Reboot!"

let x = 1000;

for (const char of sentence) {
  
  setTimeout(() => {
    
    process.stdout.write(char);
  }, x);

  x += 75;

}
setTimeout(() => {

  process.stdout.write("\n");

}, x);