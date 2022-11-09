import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      {contacts.length > 0 && (
        <div>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Filter
              </span>
            </div>
            <input
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>

          <ul className="list">
            {filtered.map((contact, i) => (
              <li key={i}>
                <span>{contact.fullName}</span>
                <span>{contact.phoneNumber}</span>
              </li>
            ))}
          </ul>

          <p className="totalContact" if>
            {filtered.length} Contacts
          </p>
        </div>
      )}
    </div>
  );
}

export default List;
