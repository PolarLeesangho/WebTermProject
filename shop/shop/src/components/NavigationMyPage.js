import {Link} from 'react-router-dom';

function NavigationMyPage(){
    return (
        <div className="nav">
            <div>
                <h1>마이페이지</h1>
                <ul> 
                    <Link to="orderHistory">
                        <li>주문 내역</li>
                    </Link>
                        <li>MY CLASS</li>
                        <li>비행기 스탬프</li>
                    <Link to="infoUpdate">
                        <li>정보 수정</li>
                    </Link>
                        <li>쿠폰함</li>
                        <li>회원 탈퇴</li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationMyPage;
