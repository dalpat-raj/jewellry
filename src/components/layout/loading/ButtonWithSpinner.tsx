import LoaderSpinner from "./LoaderSpinner";

interface ButtonWithSpinnerProps {
  loading: boolean;
  children: React.ReactNode;
}

const ButtonWithSpinner: React.FC<ButtonWithSpinnerProps> = ({
  loading,
  children,
}) => {
  return (
    <button
      type="submit"
      className={`w-full h-full flex items-center justify-center rounded`}
      disabled={loading}
    >
      {loading ? <LoaderSpinner /> : children}
    </button>
  );
};

export default ButtonWithSpinner;
