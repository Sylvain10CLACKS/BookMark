
function bookmarkList (e){("click", function(event){
    event.preventDefault()
  });
  }
          let bookmarks = [];
  
          function addBookmark() {
              const nameInput = document.getElementById("bookmark-name");
              const urlInput = document.getElementById("bookmark-url");
              const name = nameInput.value;
              const url = urlInput.value;
  
              if (!name || !url) {
                  alert("Please enter both name and URL.");
                  return;
              }
  
              if (!url.includes("https://"&& ("."))){
                  alert("Please enter valid URL");
                  return
              }
  
              const bookmark = { id: Date.now(), name, url };
              bookmarks.push(bookmark);
              renderBookmarks();
  
              nameInput.value = "";
              urlInput.value = "";
          }
  
                  //My codes Ends  here//
  
  
          function editBookmark(id) {
              const bookmark = bookmarks.find(b => b.id === id);
              const newName = prompt("Edit Website Name", bookmark.name);
              const newUrl = prompt("Edit Website URL", bookmark.url);
  
              if (newName && newUrl) {
                  bookmark.name = newName;
                  bookmark.url = newUrl;
  
                  renderBookmarks();
              }
          }
  
          function deleteBookmark(id) {
              bookmarks = bookmarks.filter(b => b.id !== id);
              renderBookmarks();
          }
  
          function renderBookmarks() {
              const bookmarkList = document.getElementById("bookmarkList");
              bookmarkList.innerHTML = "";
  
              bookmarks.forEach(bookmark => {
                  const bookmarkCard = document.createElement("div");
                  bookmarkCard.className = "bookmark-item";
  
                  bookmarkCard.innerHTML = `
                      <h3>${bookmark.name}</h3>
                      <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
                      <div class="btn-group">
                          <button class="edit-btn" onclick="editBookmark(${bookmark.id})">Edit</button>
                          <button class="delete-btn" onclick="deleteBookmark(${bookmark.id})">Delete</button>
                      </div>
                  `;
  
                  bookmarkList.appendChild(bookmarkCard);
              });
          }
  
          localStorage.setItem("bookmark", JSON.stringify(document));
  
         const vm= localStorage.getItem(bookmark);
         console.log(vm)
  
  