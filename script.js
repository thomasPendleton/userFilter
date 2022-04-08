const result = document.getElementById('result')
const filter = document.getElementById('filter')

const listItems = []

getUser()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getUser() {
  const response = await fetch('https://randomuser.me/api/?results=50')
  const { results } = await response.json()
  result.innerHTML = ''

  results.forEach((user) => {
    const listItem = document.createElement('li')
    listItems.push(listItem)
    listItem.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}"
          />
          <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
          </div>
    
    `
    result.appendChild(listItem)
  })
}

function filterData(searchTerm){
    console.log(searchTerm);
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            console.log(item);
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
    
}
