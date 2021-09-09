import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getDog, fetchFail } from './../actions/index';
import styled from 'styled-components';

const DogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div  {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2%;
    }

    button {
        background-color: dodgerblue;
        color: white;
        border-radius: 5%;
        cursor: pointer;

        :hover {
            opacity: 50%;
        }
    }`
const DogImageStyle = styled.img`
box-sizing: border-box;
border: 1px solid black;
margin: 3%;
border-radius: 30%;
  @media (max-width: 768px){
  max-width: 100%;
  border-radius: 50%;
  }
;`
const Dog = (props) => {
    // console.log('Dog.js ln:31 props', props);
    const { dog, isFetching, error } = props;
    // console.log('Dog.js ln:33 dog', dog);

    useEffect(() => {
        props.getDog();
    }, []);

    if (isFetching){
        return <h2>Fetching Animal Stand By...</h2>
    }
    if (error) {
        return <h2>Error: {error}</h2>
    }
    const handleClick = () =>{
        props.getDog();
    }
    return (
        <DogWrapper>
            <div>
                <h2> So Cute!! </h2>
                <DogImageStyle src={dog} />
            </div>
            <div>
                <button onClick={handleClick}>
                    Fetch another Dog
                </button>
            </div>
        </DogWrapper>
    )
};

const mapStateToProps = state => {
    // console.log('Dog.js ln:73 state', state);
    return {
        dog: state.dog,
        isFetching: state.isFetching,
        error: state.error
    }
}

// export default Dog;
export default connect(mapStateToProps, { getDog, fetchFail })(Dog);