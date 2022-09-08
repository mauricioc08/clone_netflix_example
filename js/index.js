const links = document.querySelectorAll('.link' );

function abrirLink(evento){
  let imagem = evento.target;
  let urlDofilme = abrirFilme(imagem.alt);
  window.open(urlDofilme);
  console.log(urlDofilme);
}

for (let index = 0; index < links.length; index++) {
  const element = links[index];
  element.addEventListener('click', abrirLink);
}

function abrirFilme(alt){
  const urlFilmes = [];

  urlFilmes['Série the umbrella academy'] = 'https://www.youtube.com/watch?v=uoaC6EXnMOM'
  urlFilmes['Filme Star Wars AS'] = 'https://www.youtube.com/watch?v=Cmgv3fwoxQw'
  urlFilmes['Filme Pokémon'] = 'https://www.youtube.com/watch?v=MZ7pk45NXBY'
  urlFilmes['Filme Guerra Civil Vingadores'] = 'https://www.youtube.com/watch?v=3p1d_6_ocEE'
  urlFilmes['Filme o hobbit'] = 'https://www.youtube.com/watch?v=4AKkpnCKa2I'
  urlFilmes['Serie breaking bad'] = 'https://www.youtube.com/watch?v=XrVlzrRECY4'
  urlFilmes['Serie Dr House'] = 'https://www.youtube.com/watch?v=dVlQJO4HZj0'
  urlFilmes['Serie Sobrenatural'] = 'https://www.youtube.com/watch?v=apltEQy8RzQ'
  urlFilmes['Serie Smallville'] = 'https://www.youtube.com/watch?v=yBHfuph4WWY'
  urlFilmes['Filme vingadores guerra infinita'] = 'https://www.youtube.com/watch?v=t_ULBP6V9bg'
  return urlFilmes[alt];

}

let retorno = '';

retorno = abrirFilme('Série the umbrella ');

console.log(retorno)