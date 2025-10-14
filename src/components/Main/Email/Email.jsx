import "./styles.css";

export const Email = () => {
  return (
    <div className="email">
      <div className="container">
        <div className="email__blok">
          <div className="email__info">
            <div className="email__title">
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </div>
            <div className="email__text">
              Type your email down below and be young wild generation
            </div>
          </div>
          <form action="">
            <div className="form__blok">
              <input
                name="email"
                type="text"
                className="form__input"
                placeholder="Add your email here"
              />
              <div className="form__btn">SEND</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
