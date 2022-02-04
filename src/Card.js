import "./index.css";

const Card = ({ removeCard, tours }) => {
  return (
    <>
      {tours.map((tour) => {
        return (
          <div key={tour.id} className="container">
            <img src={tour.image} alt={tour.name} />
            <div className="content-frame">
              <div className="header-section">
                <h5>{tour.name}</h5>
                <span>{tour.price}</span>
              </div>
              <div className="body-section">
                <p>{tour.info}</p>
              </div>
              <div className="footer-section">
                <button onClick={() => removeCard(tour.id)} type="submit">
                  Not Interested
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
