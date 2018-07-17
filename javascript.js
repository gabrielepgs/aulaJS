person = {
  
    "altura": 1.76,
    "cor": "branca",
    "cabelo":[
        {
          "comprimento": ["curto","longo"]
        },
      
        {
          "cor": ["castanho","loiro","ruivo","preto"]
        }
      ],
    "olhos":2,
    "pernas":2,
    "bracos":2,
    "genero":["feminino","masculino"]  
    
}; 
// *************** Declaração do elemento



  {altura: 1.76, cor: "branca", cabelo: Array(2), olhos: 2, pernas: 2, …}altura: 1.76bracos: 2cabelo: Array(2)0: comprimento: (2) ["curto", "longo"]__proto__: Object1: cor: (4) ["castanho", "loiro", "ruivo", "preto"]__proto__: Objectlength: 2__proto__: Array(0)cor: "branca"genero: (2) ["feminino", "masculino"]olhos: 2pernas: 2__proto__: Object

  // *************** Identificação do objeto pelo console 

  person["cabelo"][0]["comprimento"][1]  // *************** Acessando elemento da lista 
  "longo"  // *************** resultado 
  person["cabelo"][1]["cor"][2]
  "ruivo"

