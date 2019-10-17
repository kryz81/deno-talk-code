// 1. get page address from environment
// 2. read content
// 2. save the content to a file

const { ADDRESS } = Deno.env(); // 1

fetch(`https://${ADDRESS}`) // 2
  .then(res => res.text())
  .then(body => {
    const encoder = new TextEncoder();
    return Deno.writeFile(`${ADDRESS}.txt`, encoder.encode(body)); // 3
  })
  .then(() => console.log("Done!"))
  .catch(err => console.log("Something went wrong", err.message));
