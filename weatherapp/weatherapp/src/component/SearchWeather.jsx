import React from "react";

const SearchWeather = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="bg-dark text-white border-0">
              <img
                src="https://source.unsplash.com/600x900/?nature,water"
                alt="..."
                className="card-img"
              />
              <form>
                <div className="input-group mb-4 w-75 mx-auto">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span id="basic-addon2">@example.com</span>
                </div>
              </form>
              <h5 className="card-title">Card title</h5>
              <p class="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                quisquam ducimus quos provident cumque soluta animi facilis
                enim, in asperiores omnis impedit fuga hic nobis, dolorem rerum
                molestiae! Dicta, suscipit.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
