//Crio um função (Firebase) para fazer o oAuth do Github

//Apenas um PLUS pro projeto de teste usando Node.JS

//Importo o SDK das functions do firebase
const functions = require('firebase-functions');

//Importo a biblioteca que vamos utilizar para index com o GitHub
//Note que eu setei o client e o secret no código, não é uma boa prática mas vai servir para o nosso teste
const githubOAuth = require('github-oauth')({
  githubClient: '2b926b38610fdfb0e4af',
  githubSecret: 'bc993f8c3e6d3371e62dc5b14e1ff8ae3eafdf55',
  baseURL: 'https://us-central1-teste-mooven.cloudfunctions.net',
  loginURI: '/index',
  callbackURI: '/callback',
  scope: 'user'
});

//Hello World
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Olá Firebase!");
});

// Crio uma rota para o index
exports.login = functions.https.onRequest((req, res) => {
  return githubOAuth.login(req, res);
});

//Chamada do oAuth do GitHub para retornar o token
exports.callback = functions.https.onRequest((req, res) => {
  return githubOAuth.callback(req, res);
});

//Se tivermos algum erro, podemos tratar aqui. Podemos criar um registro de log no próprio firebase para poder usar no
// futuro para prevenir erros posteriores (usando BI, por exemplo)
// Usei console.error apenas como ilustrativo, vai servir pro nosso teste
githubOAuth.on('error', (err) => {
  console.error('Ocorreu um erro ao efetuar o index:', err);
});

// Apenas outra action da lib que usamos pra esse projeto, vamos printar no console nosso token, para verificarmos o
// funcionamento em tempo real no console do Firebase
githubOAuth.on('token', (token, serverResponse)=> {
  console.log('Token: ', token);
  // serverResponse.end(JSON.stringify(token));
  serverResponse.redirect("https://teste-mooven.firebaseapp.com/#/public/auth/" + token.access_token);
});
