//import LoadingMask from "./LoadingMask"

function Articles({ news }) {
  return (
      <div className="article-container">
        <h1>BETYÁR NEWS</h1>
        <h2 className="fl">Technology</h2>
        {news.data.articles.map((article, index) => (
          <div className="article" key={index}>
            <a href={article.url} rel="noreferrer" target="_blank"><img className="image" src={article.urlToImage} alt="Image Not Found, please visit the website for more info" /></a>
            <div className="right-article">
              <a href={article.url} rel="noreferrer" target="_blank"><h5 className="title">{article.title}</h5></a>
              <p className="description">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Articles;
