import React from "react";

import "./Container.scss";

const Container = (Component, classNames, id, Header) =>
  function HOC() {
    return (
      <div
        className={`app__container ${classNames}`}
        id={id}>
        {Header}
        <Component />
      </div>
    );
  };

export default Container;
