function displayLyric(response) {
  new Typewriter("#lyric", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateLyric(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "24b9b3ae0f6ea728ao45f6et261b0962";
  let prompt = `Answer a question about the year 1949 using facts and evidence  about ${instructionsInput.value} without a title that is 4 lines long and separate each line with a <br /> At the end of the answer. Sign the answer 'We Wish You the Happiest 75th Birthday, Mom!! With sincerest love and gratitude, Your Loving Family' inside a <strong> element at the end of the answer. Do not include a title`;
  let context =
    "User instructions: You are an expert in the year 1949 in the United States of America and Sountern African American culture. Your mission is to answer questions about the year 1949 that is 4 lines long in basic HTML";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  let lyricElement = document.querySelector("#lyric");
  lyricElement.classList.remove("hidden");
  lyricElement.innerHTML = `<div class="generating">⌛️ Answering a question about ${instructionsInput.value}</div>`;

  console.log("generating lyric");
  console.log(`Prompt:${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayLyric);
}

let lyricFormElement = document.querySelector("#lyric-generator-form");
lyricFormElement.addEventListener("submit", generateLyric);
