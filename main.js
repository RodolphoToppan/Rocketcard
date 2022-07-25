function generateColor() {
  const hex = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * hex.length))
  }

  return color
}
generateColor()

document.getElementById('changeColor').addEventListener('click', () => {
  let randomColor = generateColor()
  document.getElementById('background').style.backgroundColor = randomColor
})

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/RodolphoToppan`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let followers = document.querySelector('#followers p')
      followers.innerHTML = data.followers + ' Seguidores'

      let following = document.querySelector('#following p')
      following.innerHTML = data.following + ' Seguindo'

      let repository = document.querySelector('#repository p')
      repository.innerHTML = data.public_repos + ' Repositórios'

      let company = document.querySelector('#company p')
      company.innerHTML = data.company

      let location = document.querySelector('#location p')
      location.innerHTML = data.location
    })
}

getGitHubProfileInfos()
