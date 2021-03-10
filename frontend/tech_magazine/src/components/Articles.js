function Articles({ news }) {
  return (
    <div>
      {news.data.articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
        </div>
      ))}
    </div>
  );
}

export default Articles;
