import { useEffect, useState } from "react";

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  const [form, setFrom] = useState({ fullName: "", phoneNumber: "" });

  useEffect(() => {
    setFrom(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Full Name
            </span>
          </div>
          <input
            name="fullName"
            onChange={onChangeInput}
            value={form.fullName}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Phone Number
            </span>
          </div>
          <input
            name="phoneNumber"
            onChange={onChangeInput}
            value={form.phoneNumber}
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div className="btn">
          <input className="btn btn-primary" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
}

export default Form;
