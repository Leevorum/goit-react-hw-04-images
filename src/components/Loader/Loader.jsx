import { ThreeDots } from 'react-loader-spinner';
import s from './loader.module.css';

export default function Loader() {
  return (
    <div className={s.Loader}>
      <ThreeDots height="40" width="100" color="#3f51b5" ariaLabel="loading" />
    </div>
  );
}
