import type { APIRoute } from "astro";

export const prerender = false;
export const GET: APIRoute = async (context) => {
    let number = Math.random();
    return Response.json(
        {
            number,
            message: `这是一个随机数：${number}`,
        },
    );
}