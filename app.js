var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let adjetivo = 0; adjetivo < adj.length; adjetivo++) {
  
    for (let sustantivo = 0; sustantivo < noun.length; sustantivo++){
    
  console.log(pronoun[i]+ "" + adj[adjetivo] + noun[sustantivo]+ ".com");
  }
}
}