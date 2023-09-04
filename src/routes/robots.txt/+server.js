/** 자료형 테스트 중 TXT, http://localhost:5173/robots.txt 치면 hello가 화면에 나옴 */

export const GET = async () => {
    const text = "hello";

    return new Response(String(text));
};

/**
 * json 인 경우 2가지 방법
 * 1)
 *  return new Response(JSON.stringify(posts), {
        headers: {
            "Content-Type": "application/json"
        }
    });
 * 2)
 *  return json(posts);
 */