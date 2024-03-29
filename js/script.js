const loadPhones = async (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data)
}

displayPhones=data=>{
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.innerText = '';
    const pageError = document.getElementById('PageError');
    // Load show all system
    const showMoreSection = document.getElementById('show-all-phone')
    if(data.length > 10){
      data = data.slice(0, 10)
      showMoreSection.classList.remove('d-none')
    }else{
      showMoreSection.classList.add('d-none')
    }

    // Items loading spinner displaying
    if(data.length === 0){
      pageError.classList.remove('d-none');
 
    }else{
      pageError.classList.add('d-none')
    }
    // console.log(data);
    data.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = `
            <div class="card h-100 p-5">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">${phone.slug}${phone.slug}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
        `
        phoneContainer.appendChild(phoneDiv);
        // console.log(phone);
    })
    pushSpinner(false)
}

document.getElementById('search-button').addEventListener('click', function(){
  pushSpinner(true)
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhones(searchText);
searchField.value = "";
})
// Showing all items here
document.getElementById('show-all-btn').addEventListener('click', function(){
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
loadPhones(searchText);

})
// Spinner working function start here
const pushSpinner = isLoadiing =>{
const loader = document.getElementById('loader')
if(isLoadiing){
  loader.classList.remove('d-none')
}else{
  loader.classList.add('d-none')
}
};


loadPhones('iphone');