import React from "react";
import './ServiceItem.css';

function ServiceItem({ name, Icon }) {
  return (
    <div className="serviceItem">
      {Icon}
      <h4>{name}</h4>
    </div>
  );
}

export default ServiceItem;
