import { SyncLoader } from 'react-spinners';

interface Props {
  loading: boolean;
}

const LoadingSpinner = ({ loading }: Props) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen top-0 left-0 absolute z-50">
      <SyncLoader
        color="#00564e"
        size={20}
        margin={4}
        speedMultiplier={0.8}
        loading={loading}
      />
    </div>
  );
};

export default LoadingSpinner;
