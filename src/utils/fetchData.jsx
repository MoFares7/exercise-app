export const exerciseOptions = {
        method: 'GET',
        headers: {
                'X-RapidAPI-Key': '1fe8cb93d9mshaf745e418254401p1672d8jsn67aea1f22a4c',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
}

export const fetchData = async (url, options) => {
        const res = await fetch(url, options);
        const data = await res.json();

        return data;
};