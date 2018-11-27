const Discord = require('discord.js');
const bot16 = new Discord.Client();

bot16.on('ready', () => {
  console.log('Logged in as S16-17-18')
});


bot16.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot16.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot16.on('ready', () => {
  let ch = bot16.guilds.get("507972785650401301").channels.find(c => c.id == "515838588299247626");
  setInterval(function() {
    ch.send("16th Lover")
  }, 900);
});


bot16.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f16"){
    message.channel.send(args.join(" "))
  }
});


bot16.login(process.env.FB16);
////////////////////////
////////////////////////
const bot17 = new Discord.Client();
bot17.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot17.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot17.on('ready', () => {
  let ch = bot17.guilds.get("507972785650401301").channels.find(c => c.id == "515838588299247626");
  setInterval(function() {
    ch.send("17th Lover")
  }, 900);
});


bot17.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f17"){
    message.channel.send(args.join(" "))
  }
});


bot17.login(process.env.FB17);
////////////////////////
////////////////////////
const bot18 = new Discord.Client();
bot18.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot18.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot18.on('ready', () => {
  let ch = bot18.guilds.get("507972785650401301").channels.find(c => c.id == "515838588299247626");
  setInterval(function() {
    ch.send("18th Lover")
  }, 900);
});


bot18.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f18"){
    message.channel.send(args.join(" "))
  }
});


bot18.login(process.env.FB18);
