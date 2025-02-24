document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById("toc");
    const article = document.querySelector("article");
  
    if (!toc || !article) return;
  
    // Select only headers inside <article>
    const headers = article.querySelectorAll("h2, h3, h4"); // Adjust levels as needed
    if (headers.length === 0) return;
  
    let tocHTML = '<div class="toc"><strong>Table of Contents</strong><ul>';
    headers.forEach((header, index) => {
      const id = `header-${index}`;
      header.id = id;
      const level = header.tagName.toLowerCase(); // h2, h3, h4
      const indent = level === "h3" ? "&nbsp;&nbsp;" : level === "h4" ? "&nbsp;&nbsp;&nbsp;&nbsp;" : "";
      tocHTML += `<li>${indent}<a href="#${id}">${header.innerText}</a></li>`;
    });
    tocHTML += "</ul></div>";
  
    toc.innerHTML = tocHTML;
  });