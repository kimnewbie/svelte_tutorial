/** 다른 타입 적용 "Content-Type": "text/html", http://localhost:5173/website */

export const GET = async () => {
    const markup = "<html><body><h1>Webjeda</h1></body></html>";

    return new Response(markup, {
        headers: {
            "Content-Type": "text/html",
        },
    });
};