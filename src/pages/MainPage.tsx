import styled from '@emotion/styled';
import TravelSection from '../components/main/ProductSection';

const Main = styled.main`
	max-width: 1250px;
	display: flex;
	margin: 0 auto;
	padding: 0 60px;
`;

function MainPage() {
	return (
		<Main>
			<main style={{ width: '1250px' }}>
				<h1>국내여행</h1>
				<p>라이크어로컬에서 추천하는 상품입니다</p>
				<TravelSection />
			</main>
		</Main>
	);
}

export default MainPage;
