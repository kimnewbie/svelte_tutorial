// 임시 api 데이터 호출
// props로 {fetch}를 받으면 http://localhost:5173 부분을 지워도 api 호출 가능! 개이득 🐶

export const load = async ({ fetch }) => {
    const getPosts = async () => {
        // const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const res = await fetch("/api/posts.json")
        const data = await res.json();
        // const filterData = data.slice(0, 3);
        // return filterData;
        return data;
    };

    return {
        posts: getPosts(),
    }
};