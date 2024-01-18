import PropTypes from "prop-types";

const FavoriteButton = ({ isFavorite, onToggle }) => {
  return (
    <button
      className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${
        isFavorite
          ? "bg-[#DC2954]/[14%] py-1.5 text-[#DC2954] hover:bg-[#DC2954]/[24%]"
          : "bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] hover:bg-[#1C4336]/[24%]"
      } lg:py-1.5`}
      onClick={onToggle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={isFavorite ? "#DC2954" : "#1C4336"}
        className="h-5 w-5"
      >
        {isFavorite ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        )}
      </svg>
      {isFavorite ? "Unfavorite" : "Favorite"}
    </button>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FavoriteButton;