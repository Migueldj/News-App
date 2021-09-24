export const getNews = async( category ) => {

    const param = (category === 'Inicio'? 'hoy' : category);  
    const freshness = (category === 'Inicio'? 'Day' : 'Week');
    
    const resp = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${encodeURI(param)}&safeSearch=Off&textFormat=Raw&freshness=${freshness}&mkt=es-MX&sortBy=Date&count=100`, {
        "method": "GET",
        "headers": {
            "x-bingapis-sdk": "true",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            "x-rapidapi-key": "03192d6a16msh50e40a23df72d9fp1e7878jsn3f64491b9687"
        }
    })

    const { value } = await resp.json();

    const news = value.map ( report => {
        return {
            description: report.description,
            title: report.name,
            date: report.datePublished,
            image: report.image,
            url: report.url,
        } 
    })

    return news;
}
