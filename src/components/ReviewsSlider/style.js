import styled from 'styled-components';

const SliderReviewContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;

    .slick-dots li button:before {
    color: white;
    }
    .slick-dots li.slick-active button:before {
    color: ${({theme}) => theme.primaryText};
    }

    .slick-prev:before, .slick-next:before{
        color: ${({theme}) => theme.primaryText};
        font-size: 2rem;
    }

    @media (max-width: 425px){
        max-width: 320px;

        .slick-prev:before, .slick-next:before{
            display: none;
        }
    }
`;

export default SliderReviewContainer;