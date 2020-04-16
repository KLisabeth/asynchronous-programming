const path = '/posts/1';
const start = Date.now();
const assertMsg = (name) => `${path}, ${Date.now() - start} ms., ${name}`;
const baseURL = 'https://jsonplaceholder.typicode.com';

const expectedTitle = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
const expectedBody = `quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto`;

fetch(baseURL + path)
  .then(res => res.json())
  .then(data => {
    console.log(assertMsg('requested data:'), data);
    console.assert(data.userId === 1, assertMsg('.userId'));
    console.assert(data.id === 1, assertMsg('.id'));
    console.assert(data.title === expectedTitle, assertMsg('.title'));
    console.assert(data.body === expectedBody, assertMsg('.body'));
  })
  .catch(err => console.error(err));

