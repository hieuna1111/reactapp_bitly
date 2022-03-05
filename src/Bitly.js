import "./Bitly.css";

function Bitly() {
  return (
    <div className="container">
      <div className="cover">
        <div className="content">
          <div className="shorten">
            <input type="text" />
            <button className="btn-shorten">Shorten</button>
          </div>
          <div className="cover-link">
            <div className="link-content">
              <div className="left-link">
                <span>
                  https://developer.mozilla.org/en-US/docs/Web?retiredLocale=vi
                </span>
              </div>
              <div className="right-link">
                <span>https://bit.ly/3KjKcCN</span>
                <button className="btn-copy">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bitly;
