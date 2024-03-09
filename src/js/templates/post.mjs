export function postTemplateB(postData) {
    const post = document.createElement("div");
    post.classList.add("post", "border", "m-5", "p-3", "rounded");
    
    post.setAttribute('data-id', postData.id);

    const title = document.createElement("h2");
    title.classList.add("text-light", "fs-5", "m-3");
    title.textContent = postData.title;
    
    const content = document.createElement("p");
    content.classList.add("bg-light", "p-3", "mb-3");
    content.textContent = postData.content;
    
    const interaction = document.createElement("p");
    interaction.classList.add("text-light", "text-end");
    interaction.textContent = `🤍 259 💬 49 `;
    
    post.append(title, content, interaction);
    
    if (postData.media) {
        const img = document.createElement('img');
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        img.classList.add("img-fluid", "mb-3");
        post.prepend(img);
    }
    
    return post;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplateB(postData))
}


export function renderPostTemplates(postDataList, parent) {
    postDataList.forEach(postData => {
        const postElement = postTemplateB(postData);
        parent.append(postElement);
    });
}


import * as postMethods from "../api/posts/index.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) {
        console.error("Post id not found in URL!");
        return;
    }
    
    try {
        const post = await postMethods.getPost(postId);
        renderPostDetails(post);
    } catch (error) {
        console.error("Error whille fetching the post", error);
    }
});

function renderPostDetails(post) {
    const postContainer = document.getElementById('post');
    postContainer.innerHTML = `
          <div class="post border m-5 p-3 rounded" data-id="${post.id}">
            <h2 class="text-light fs-5 m-3 fw-bold">${post.title}</h2>
            <p class="bg-light p-3 mb-3 text-dark"></p>
            <p class="text-light text-end fw-bold">🤍 259 💬 49 </p>
            ${post.media ? `<img src="${post.media}" alt="Image from ${post.title}" class="img-fluid mb-3 rounded">` : ''}
        </div>
    `}
