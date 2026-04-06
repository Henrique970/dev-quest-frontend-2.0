const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const loadPosts = async () => {
    const response = await fetch(baseUrl);
    const allPosts = await response.json();
    // O slice é um método de array que retorna uma cópia de uma parte do array.
    const firstFivePosts = allPosts.slice(0, 5);

    firstFivePosts.forEach((post, index) => {
        console.log(`Post ${index + 1}:`);
        console.log(`Título: ${post.title}`);
        console.log(`Corpo: ${post.body}`);
        console.log("_______________________");
    });
};

loadPosts();