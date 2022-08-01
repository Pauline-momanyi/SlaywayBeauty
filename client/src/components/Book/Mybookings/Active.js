import React from "react";
import BookItem from "./BookItem";

function Active() {
  return (
    <table className="table-auto w-full">
      <tbody className="text-md divide-y divide-gray-100">
        <BookItem/>
        <BookItem/>
        <BookItem/>
        <BookItem/>
      </tbody>
    </table>
  );
}

export default Active;
