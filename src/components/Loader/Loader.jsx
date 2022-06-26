import { ThreeDots } from 'react-loader-spinner';

export default function Loader(props) {
  return (
    <div className="Loader">
      <ThreeDots height="40" width="100" color="#3f51b5" ariaLabel="loading" />
    </div>
  );
}
