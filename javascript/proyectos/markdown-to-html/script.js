
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");


markdownInput.addEventListener("input", ()=>{
   htmlOutput.innerText=convertMarkdown();
    preview.innerHTML=convertMarkdown();
  });

function convertMarkdown() {
  let text = markdownInput.value;
  text = text.replace(/^#{1}\s+(.+)/gm, "<h1>$1</h1>");
  text = text.replace(/^#{2}\s+(.+)/gm, "<h2>$1</h2>");
  text = text.replace(/^#{3}\s+(.+)/gm, "<h3>$1</h3>");
  text = text.replace(/^#{4}\s+(.+)/gm, "<h4>$1</h4>");
  text = text.replace(/^#{5}\s+(.+)/gm, "<h5>$1</h5>");
  text = text.replace(/^#{6}\s+(.+)/gm, "<h6>$1</h6>");
  
  text = text.replace(/\*\*(.+?)\*\*/gm, "<strong>$1</strong>");
  text = text.replace(/\_\_(.+?)\_\_/gm, "<strong>$1</strong>");

  text = text.replace(/\*(.+?)\*/gm, "<em>$1</em>");
  text = text.replace(/\_(.+?)\_/gm, "<em>$1</em>");

  text = text.replace(/\!\[(.+?)\]\((.+?)\)/gm, "<img alt=\"$1\" src=\"$2\">");
  text = text.replace(/\[(.+?)\]\((.+?)\)/gm, "<a href=\"$2\">$1</a>");

    text = text.replace(/^\w*> (.+)/gm, "<blockquote>$1</blockquote>");

  
  htmlOutput.textContent = text;
  preview.innerHTML = text;

  return text;
}
