const LikeButton = ({ operation, clickHandler }) => {
  return (
    <button
      className={`btn btn--${
        operation === "reset" ? 1 : operation === "like" ? 2 : 3
      }`}
      onClick={() => clickHandler(operation)}
    >
      {operation.toUpperCase()}
    </button>
  );
};

export default LikeButton;
