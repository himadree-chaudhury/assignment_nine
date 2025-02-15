const Loading = ({
  // eslint-disable-next-line react/prop-types
  fullScreen = true,
  // eslint-disable-next-line react/prop-types
  size = "w-12 h-12",
  // eslint-disable-next-line react/prop-types
  color = "border-green-600",
}) => {
  return (
    <div
      className={`${
        fullScreen
          ? "flex items-center justify-center h-screen"
          : "inline-block"
      }`}
    >
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${color} ${size}`}
      ></div>
    </div>
  );
};

export default Loading;