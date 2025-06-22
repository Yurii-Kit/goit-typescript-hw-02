import { Toaster } from 'react-hot-toast';

const Loader = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 2000,
        style: {
          background: '#333',
          color: '#fff',
        },
      }}
    />
  );
};

export default Loader;
