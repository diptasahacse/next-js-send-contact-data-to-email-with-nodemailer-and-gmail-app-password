import { useReducer } from "react";

export default function Home() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const reducer = (state, action) => {
    console.log(action);

    if (action.type == "INPUT") {
      return { ...state, [action.payLoad.name]: action.payLoad.data };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <div className="container">
        <div>
          <div className="form-section">
            <form onSubmit={submitHandler} className="row g-3">
              <div className="col-md-6">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="name"
                  onBlur={(event) =>
                    dispatch({
                      type: "INPUT",
                      payLoad: {
                        name: event.target.name,
                        data: event.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="emailInput" className="form-label">
                  Email
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control"
                  id="emailInput"
                  name="email"
                  onBlur={(event) =>
                    dispatch({
                      type: "INPUT",
                      payLoad: {
                        name: event.target.name,
                        data: event.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="col-12">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onBlur={(event) =>
                    dispatch({
                      type: "INPUT",
                      payLoad: {
                        name: event.target.name,
                        data: event.target.value,
                      },
                    })
                  }
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
