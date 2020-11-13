import React from "react";

export default function Cart(props) {
  var { children } = props;
  return (
    <section className="section">
      <div className="table-responsive">
        <table className="table product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Sex</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </section>
  );
}
