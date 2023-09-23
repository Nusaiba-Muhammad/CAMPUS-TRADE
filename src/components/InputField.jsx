import React, { useState } from "react";
export default function InputField({
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
  style,
}) {
  const [filterText, setFilterText] = useState("");
  const rows = [];
  Array.forEach((p) => {
    if (
      p.item_name &&
      p.item_name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    )
      return;
    else rows.push(p);
  });
  return (
    <>
      <input
        type={type}
        className={className}
        style={style}
        placeholder={placeholder}
        name="filterText"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </>
  );
}
