import marked from "marked";

function transferFile(codeStr) {
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  });

  marked.setOptions({
    highlight: function(codeStr) {
      return hljs.highlightAuto(codeStr).value;
    },
  });
  return marked(codeStr);
}
export default transferFile;
