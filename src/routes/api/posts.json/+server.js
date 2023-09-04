import { json } from "@sveltejs/kit";

export const GET = async () => {
    // https://jsonplaceholder.typicode.com/posts
    const posts = [
        {
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            image: "https://picsum.photos/id/10/800/500",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: 2,
            title: "qui est esse",
            image: "https://picsum.photos/id/17/800/500",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            image: "https://picsum.photos/id/49/800/500",
            body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
        },
    ]

    // return new Response(JSON.stringify(posts), {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // });
    return json(posts);
}