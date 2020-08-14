export const getGifs = async (category) => {
    //const url ="https://api.giphy.com/v1/gifs/search?q=OnePunchMan&limit=10&api_key=oMiF0qDmRnGEcddIatXan7IVrf4Gqz9a";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=oMiF0qDmRnGEcddIatXan7IVrf4Gqz9a`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        };
    });

    return gifs;

};