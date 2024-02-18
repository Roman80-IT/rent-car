import { StyledLoader } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines 
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        strokeColor="rgb(2, 66, 139)"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </StyledLoader>
  );
};
