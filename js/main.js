
document.getElementById('button').addEventListener('click', saveBookmark);
  var siteName =document.getElementById('siteName');
  var siteUrl =document.getElementById('siteUrl');
  var validBox1 =document.getElementById ('valid1');
  var validBox2 =document.getElementById ('valid2');



function saveBookmark(){
   
  var bookmark = {
    name: siteName.value,
    url: siteUrl.value
  }
  
  if(validateForm(bookmark.name, bookmark.url)){
    
  if(localStorage.getItem('bookmarks') === null){
    var bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } 
  else {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  document.getElementById('myForm').reset();
  DisplayBookmarks();
  
 }

}

function deleteBookmark(i){
  
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   bookmarks.splice(i, 1);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  DisplayBookmarks();
}


function DisplayBookmarks(){

  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  
  var bookmarksResults = document.getElementById('bookmarksResults');

   mytags='';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    
    mytags+= `
    
  <div class="result mx-auto my-3 row py-3">
  <h4 class=" col-3">${name}</h4>
  <a  class="btn btn-info col-1 mx-2 " target="_blank" href="https://${url}/" >Visit</a> 
  <a onclick="deleteBookmark(${i})" class="btn btn-danger col-1" href="#" >Delete</a> 
                                 
  </div>`
  }

  bookmarksResults.innerHTML = mytags;

}

function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    validBox1.innerHTML=`
    <div class="validRed mx-auto my-2 p-2">
    <h6>Name is required</h6>
    </div>
    `; 
    validBox2.innerHTML=`
    <div class="validRed mx-auto my-2 p-2">
    <h6>Url is required</h6>
    </div>
    `; 
    return false;
  } 
  else{
  validBox1.innerHTML=``;
  validBox2.innerHTML=``;
  return true;
  }
 
}


