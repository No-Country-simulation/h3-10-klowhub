export default function HeartIcon({ StateHeart }) {
  return (
    <svg
      className={` ${
        StateHeart ? "fill-red-500 stroke-red-500" : "fill-white stroke-white"
      } `}
      width="24"
      height="22"
      viewBox="0 0 24 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5846 13.1667C21.1988 11.585 22.8346 9.68917 22.8346 7.20833C22.8346 5.62809 22.2069 4.11256 21.0895 2.99516C19.9721 1.87775 18.4566 1.25 16.8763 1.25C14.9696 1.25 13.6263 1.79167 12.0013 3.41667C10.3763 1.79167 9.03297 1.25 7.1263 1.25C5.54605 1.25 4.03053 1.87775 2.91312 2.99516C1.79572 4.11256 1.16797 5.62809 1.16797 7.20833C1.16797 9.7 2.79297 11.5958 4.41797 13.1667L12.0013 20.75L19.5846 13.1667Z"
        fillOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
