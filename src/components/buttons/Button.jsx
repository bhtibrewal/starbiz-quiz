export const Button = ({ className, onClick, children }) => {
  return (
    <button
      className={className('btn', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
