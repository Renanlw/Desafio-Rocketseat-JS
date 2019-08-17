var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var dado;

function pegaIdade() {
  var idade = inputElement.value;

  dado.push(idade);
  inputElement.value = "";
}

function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return idade >= 18 ? resolve() : reject();
    }, 2000);
  });
}

checaIdade(15)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });
/*var xhr = new XMLHttpRequest();

xhr.open("GET", "");
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};*/

/*var minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

minhaPromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
  */

/*axios
  .get("https://api.github.com/users/renanlw")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
*/