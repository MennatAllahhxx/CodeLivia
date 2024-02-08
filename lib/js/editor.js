// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Ace editors
  const htmlEditor = ace.edit("html-code");
  htmlEditor.setTheme("ace/theme/monokai");
  htmlEditor.session.setMode("ace/mode/html");

  const cssEditor = ace.edit("css-code");
  cssEditor.setTheme("ace/theme/monokai");
  cssEditor.session.setMode("ace/mode/css");

  const jsEditor = ace.edit("js-code");
  jsEditor.setTheme("ace/theme/monokai");
  jsEditor.session.setMode("ace/mode/javascript");

  // Get the output iframe element
  const outputFrame = document.getElementById("output");

  // Function to update the output
  function updateOutput() {
    // Get the content from the editors
    const htmlContent = htmlEditor.getValue();
    const cssContent = "<style>" + cssEditor.getValue() + "</style>";
    const jsContent = "<script>" + jsEditor.getValue() + "</script>";

    // Concatenate HTML, CSS, and JavaScript content
    const combinedContent =
      "<html><head>" +
      cssContent +
      "</head><body>" +
      htmlContent +
      "</body>" +
      jsContent +
      "</html>";

    // Update the content of the iframe
    outputFrame.srcdoc = combinedContent;
  }

  // Update the output initially and whenever there's a change in editors
  htmlEditor.session.on("change", updateOutput);
  cssEditor.session.on("change", updateOutput);
  jsEditor.session.on("change", updateOutput);
});
