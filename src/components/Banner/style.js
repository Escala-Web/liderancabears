import styled from "styled-components";
import banner from "../../assets/images/banner_teste.png"

const ContainerBanner = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	overflow-x: hidden;

	.background-blur {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0)), url(${banner});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		filter: blur(8px);
		overflow-x: hidden;	
	}

	.since{
		position: relative;
		color: white;
		font-size: 1.2rem;
	}

	.title{
		position: relative;
		margin-top: 6rem;
		margin-bottom: 0;
	}

	.img{
		margin: 1rem 0;
		position: relative;

		img{
			box-shadow: 0px 0px 12px 5px #be96616b;
			border-radius: 12px;
		}
	}

	.buttonAction{
		position: relative;
	}

	/* .since::after{
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
	} */

	@media (min-width: 1024px) {
		.img{
			display: flex;
			justify-content: center;
			width: 50%;
			display: none;

			img{
				width: 150%;
			}
		}

		.since{
			margin: 1rem 0;
		}
	}	

	@media (max-width: 1024px){
		.title{
			font-size: 3rem;
		}
	}

	@media (max-width: 768px) {
		.title{
			font-size: 2.2rem;
		}	
	}

	@media (max-width: 420px){
		.title{
			padding: 1rem;
			margin-top: 4rem;
			font-size: 1.5rem !important;
		}

		.contentSize{
			display: flex;
			justify-content: center;
			padding: 0 1rem;
			
			.since{
				text-align: center;
				margin: 0;
				font-size: 1.1rem;
			}	
		}
		.img{
			display: flex;
			justify-content: center;

			img{
				width: 80% !important;
			}
		}

		.buttonAction{
			margin-bottom: 2rem;
		}
	}

	@media (max-width: 768px){
		.contentSize{
			display: flex;
			justify-content: center;
			padding: 0 1rem;
			
			.since{
				text-align: center;
				margin-bottom: 2rem;
			}	
		}
		.img{
			display: flex;
			justify-content: center;

			img{
				width: 100%;
			}
		}

		.buttonAction{
			margin-bottom: 2rem;
		}
	}
`;


export default ContainerBanner;