function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light')

  //procura o item na página com escrita html (img dentro do prfile)
  const image = document.querySelector('#profile img')
  if(html.classList.contains('light')){
    //se tiver no light mode imagem diferente
    image.setAttribute('src' , '/Assets/avatar-light.png')
    image.setAttribute('alt', 'foto com homem com oculos')
    //setar atributo, definir atributo
  }
  else{
    image.setAttribute('src','/Assets/avatar.png')
    image.setAttribute("alt", "foto com homem sem oculos")
  }
  /*essa função pode ser substituida por toggle*/


}

