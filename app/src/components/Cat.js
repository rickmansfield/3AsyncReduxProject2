import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getCat, fetchFail } from './../actions/index';
import styled from 'styled-components';
const CatWrapper = styled.div`
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

const CatImageStyle = styled.img`
box-sizing: border-box;
border: 1px solid black;
margin: 3%;
border-radius: 30%;
  @media (max-width: 768px){
  max-width: 100%;
  border-radius: 50%;
  }
;`
const Cat = (props) => {
const {cat, isFetching, error } = props;

useEffect(() => {
    props.getCat();
}, []);

if (isFetching){
    return <h2>Fetching Animal Stand By...</h2>
}
if (error) {
    return <h2>Error: {error}</h2>
}
const handleClick = () =>{
    props.getCat();
}
return(
<CatWrapper>
<div>
    <h2> So Cuddly!! </h2>
    <CatImageStyle src={cat} />
</div>
<div>
    <button onClick={handleClick}>
        Fetch another Cat
    </button>
</div>
</CatWrapper>
)
};
const mapStateToProps = state => {
    console.log('Cat.js ln:70 state', state);
    return {
        cat: state.cat,
        isFetching: state.isFetching,
        error: state.error
    }
}

// export default cat;
export default connect(mapStateToProps, { getCat, fetchFail })(Cat);