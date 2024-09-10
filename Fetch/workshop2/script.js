console.log("oi what you looking at?");

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return data;
}

getPosts().then((posts) => {
  const postsContainer = document.getElementById("posts-container");

  posts.forEach((post) => {
    createPosts(post.title, post.body);
  });
});

function createPosts(titleContent, bodyContent) {
  const article = document.createElement("article");
  article.className = "post";

  const title = document.createElement("h2");
  title.textContent = titleContent;

  const body = document.createElement("p");
  body.textContent = bodyContent;

  article.appendChild(title);
  article.appendChild(body);

  const postsContainer = document.getElementById("posts-container");
  postsContainer.appendChild(article);
}
