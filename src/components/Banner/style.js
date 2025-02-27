import styled from "styled-components";

const ContainerBanner = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0)), url('/banner_teste.png');
	background-repeat: no-repeat;
	background-size: cover;

	.since{
		position: relative;
		color: white;
		font-size: 1.2rem;
	}

	.since::after{
		content: "";
		width: 100%;
		background-color: white;
		height: 2px;
		position: absolute;
		top: 0;
		right: 100%;
		display: block;
		margin: 10px;
	}

	.since::before{
		content: "";
		width: 100%;
		background-color: white;
		height: 2px;
		position: absolute;
		top: 0;
		left: 100%;
		display: block;
		margin: 10px;
	}
`;


export default ContainerBanner;