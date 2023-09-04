/** 자료형 테스트 중 XML, http://localhost:5173/sitemap.xml */

export const GET = async () => {
    const markup = "<xml><h1>Webjeda</h1></xml>";

    return new Response(markup, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};