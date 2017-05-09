var readline = require('readline');
var rl = readline.createInterface(process.stdin , process.stdout);

//create object to store persons name and sayings.

var man = {
name:'',
sayings: []
};

//asking a question.
rl.question("what is your name ?" , function(answer){
  //save the name of the man.
  man.name = answer;

  rl.setPrompt(`what would ${man.name} say ?`);
  rl.prompt();
  rl.on('line', function(saying){
    man.sayings.push(saying.trim());
    if(saying.toLowerCase().trim() === 'exit') {
      rl.close();
    } else {
      //more saying
      rl.setPrompt(`What else would ${man.name} say ? ('exit' to leave)`);
      rl.prompt();
    }

  });

});

//Listener for close event
rl.on('close' , function(){
  console.log("%s is a real person that says %j", man.name , man.sayings);
  process.exit();
});
