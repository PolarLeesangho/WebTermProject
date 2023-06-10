import "../css/MainHeader.css"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainHeader()
{
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible); // 상태 변수를 반전시킴
    };

    return(
        <div class = "header_layout"> 
            <div class = "main_top">
                <div class = "top_left">
                    <img onClick ={toggleVisibility} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAhAQMAAACsrRqAAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlP/AOW3MEoAAAAUSURBVHicY2DAAf6DwQea0YPMXgCZ+6XxJRwbQwAAAABJRU5ErkJggg==" class="web-icon-menu" />
                    <span>PIZZA ALVOLO</span>
                </div>
                <div class = "top_middle">
                    <span>홈</span>
                    <Link to="/pizza">
                        <span>피자</span>
                    </Link>
                    <span>스페셜반반피자</span>
                    <span>세트</span>
                    <span>사이드</span>
                    <span>하프앤하프</span>
                    <span>멤버십. 제휴할인</span>
                    <span>이벤트</span>
                </div>
                <div class = "top_right">
                    <div class = "top_right_text">
                        <span>마이페이지</span>
                        <span>회원가입</span>
                        <span>로그아웃</span>
                        <span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA4CAYAAAHFvesGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABWhJREFUeNpi/P//PwMaEADiDyAGE5qEAkwCDEA6/0MAMv0eRMN0MgJxAJQGAUGwIBY74YAJi9h5kG34dIIFAQIImyRIgBHZyPeo0hAng7AAEhvsiPtQp98nZAdYkgmbi9AtZ0AKCQaAAMIbCjCno7PRTUsA4v1I/AVA3ABlH0C2Cdk0dNORxQSR454RyRYDLBpg/imAxhFKgKJjBSQallbWgx2GRXEAGv8+EJ8H4gQo34BQ6KEDULwLAAQQPucxICXfBGQxFjymgoJaHhpqDrhSFjL+jxYg75Hl0f1ETJzBU8R9qBOQk4wAmgYHZOchO6UBiOejOwcqDleHHEIwAwyg8YLTn7g8j44NoLYRFRBEFxzIORHGfo8Udwy43P0f6q8AbPLoznsPTQHoORaWPf5jKwcE0eILpvgBNN4UiSkjsJYZAAFETCrHh89D/RkALRX/o+cIbHFLDDaAGvYej8XzybVoP9TwAjz5GpZicZqDq9yCuVoAR1H1H0c2wJnqYYz5UAUNBOLCgcg4W4/LImwu/A8tWInNo//xqUNXPB9LaXcfW/mKxzcN2FIfvvrlPxGGMxDpQwZSKmhSAUZVS6rm/2gV/39oFQ0C85HKH0ekFgzJPkLmG8DreNxqcDZTGLAUfv+RGnYTkOQuQA1hhBaQIPn1aJZOgPqSgdKyDht2gCaEfuREwcJAfXAAyVcBsCoaIAAtZnikIAyEUc6xAEugBO2A60ArMFYgVqBWQAneVWAJlKAdYAeUgDCTddbPXZKsmhn+CHETkux7yydmUCmHO0PHtTZaF1L7f+DssyEmQoxKkIaR8BZz7lJnVHt27xh6+QCSVQNbCSLwpwzgVz+R4wudB4jq/P06tGlCRqyRU4PjUmOWFCAEwWYEgk4jbwqiKzjxWSrKSZM6xRGKmAPJBqoG0l4DDiCXXAA2BfXJpUBOmQ0SthrZXbz/WVpfFMMldK6lMiRQsxXScZBe1UnYgefA+szYcxdpUNo3iAFqC0OiLb0jnF5yXkCd3jGgIgYTC5/POiNCjv21TcGEVbdyj5IfCyZK0CyeuUnDnP/thg9NE4FHVCXg1VDC00a6vgu+o1+/xqtVAbtz018V0zFnDcR9bg6mM7Q9m83gEOtY8HVQ+R2UhNsqCbWLLS1b+KMswKiZNRCll7nBUJ+S7TeUuGUBHq978gUlHgqDFftIs7YKZPq3wT7OXYBqrfY2QhiGXjsBIzACI9ANMgIblBG8AeoEuQ1OnSAjtBvQDbgNqHRKpMiyE5skXGuJPwhQnh1/5D1auE5zTWjHYrPab54NoI96acgaYGYiK51NzwZkonQOU+MofE8y5DUH1KEo7IkocOVljSLYPwPQiKKwCqMQHADIAYvCAVUAUYuwyih8IQeYGs7VRqFkEYAqmhVsJ9BWO0kUtIuIjyYOVbTpQFXcNXN57UXMyAFOm9QJvh2kgEoWEY6zuK+UALBMk12lgKwysXFfcURFGzOETm78BOa+0Ww5g+beITMV2ozec4SV5/JlLmG0OlTN5gQ7wpk72EdswqH7UW2KKpslizzS41zCWUuNPjQIt2PLa5CU8FLvLSeDykmmRQevndCKWpvxfMZP0M9rSBGtAPX+uuDfdZCt/rk38plCqm8XFJMtsUV6oqk71OeA+barfXyQAAIC3ETMaUMmZxaGfO9rymxSg0gy/YgE4DViJr+Zdz8jfTfYPdKq3s/ecpColktiCI5nROrUypbwGkMk7kuztKsz4OJ8GrQlvAaLc0MLSRUBLbgtcZSfKKnu2bycBhzFU2xYWPnLgDC4GwEOsF7WmqJtYZ2vlAbdf8gvr5f/Z3dPnr94Iv3q7z3+ZfgFs17c6KlsbuIAAAAASUVORK5CYII=" class="icon-pizza"></img>
                        </span>
                    </div>
                </div>
            </div>
            {isVisible &&
                <div class="web-main-tab-collapse" >
                <div class="web-collapse-tab-top">
                    <div class="collapse-tab-item">
                        <div class="tab-item">
                            피자
                        </div> 
                        <Link to="/pizza">
                            <div class="tab-item">
                                전체피자
                            </div>
                        </Link>
                        <div class="tab-item">
                            스페셜반반피자
                        </div>
                        <div class="tab-item">
                            세트메뉴
                        </div>
                        <div class="tab-item">
                            하프앤하프
                        </div>
                    </div>
                    <div class="collapse-tab-item">
                        <div class="tab-item">
                            사이드메뉴
                        </div> 
                    </div>
                    <div class="collapse-tab-item">
                        <div class="tab-item">
                            멤버십˙제휴할인
                        </div> 
                        <div class="tab-item">
                            멤버십 혜택
                        </div>
                        <div class="tab-item">
                            통신사 제휴 할인
                        </div>
                    </div>
                    <div class="collapse-tab-item">
                        <div class="tab-item">
                            이벤트
                        </div> 
                    </div>
                    <div class="collapse-tab-item">
                        <div class="tab-item">
                                매장찾기
                        </div>
                        <div class="tab-item">
                            지역명 찾기
                        </div>
                        <div class="tab-item">
                            매장명 찾기
                        </div>
                        <div class="tab-item">
                            현위치 찾기
                        </div>
                    </div>
                    <div class="collapse-tab-item">
                        <div class="tab-item">
                            마이페이지
                        </div> 
                        <div class="tab-item">
                            주문내역
                        </div>
                        <div class="tab-item">
                            쿠폰함
                        </div>
                        <div class="tab-item">
                            MY CLASS
                        </div>
                        <div class="tab-item">
                            비행기스탬프
                        </div>
                        <div class="tab-item">
                            정보수정
                        </div>
                        <div class="tab-item">
                            회원탈퇴
                        </div>
                    </div>
                    <div class="collapse-tab-item">
                        <div class="tab-item">
                            주문하기
                        </div> 
                        <div class="tab-item">
                            배달주문하기
                        </div>
                        <div class="tab-item">
                            포장주문하기
                        </div>
                        <div class="tab-item">
                            간편주문
                        </div>
                        <div class="tab-item">
                            E쿠폰
                        </div>
                        <div class="tab-item">
                            선물하기
                        </div>
                    </div>
                </div> 
                <div class="web-collapse-tab-middle">
                    <span class="tab-middle-item">
                        회사소개 
                    </span> 
                    <span class="tab-middle-item">
                        가맹문의 
                    </span> 
                    <span class="tab-middle-item">
                        고객센터 
                    </span> 
                    <span class="tab-middle-item">
                        단체주문 
                    </span> 
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAptJREFUeNq8Vz1MU1EYva8/BEFFo0BMHGxtdCBBQ1UWE+1mEP+ig65aJS4SFjVxYUQddDMadHXRSRSdcNC4NaQJi5aoLIbURCRakAL1nJevDbTv575H+05y2pve+75z3rvv+/pdY8fVUaWJzeBJMAUeBGNgm8z9Br+Ck+AE+Br8oxM0orEmAd4CL4GtNms6hL3gAPgXfA7eBXNOwUMOc83gCDgFph3ErdAq10yJiWavBvaCn+TOm5R/8NqbEiuha6AH/Cj7XC8w1geJ7WiALt+Cnar+6JTYCTsDm8AXYLtqHBj7pWjVGBgGD6jGo1u01hngSzekgsNQeSvKBm6D0QANREXTNLBFiowj+nv2qCfp46opYl86OMc1XKuBi9RmJezTKTJnkjF17nBcRSNhNTA6oZaWV2vEH6dT6hTEDcNQY5lvOsWqL9ySPD2IQdJt9bvsjNq/a7spsA/f45Pf1cpqqUacwtefva/MueAXDdzBYLfbSgZ8A9FqE+GQsU78msXTccCygX/DPAY7tWuruc8pc59fyWP2KU78pIF/Xuv9WhOET3FiKeQ3j0o2Y6+ggXmvd792z0mO+ZtTitpgnldM+xXnYyc3YGKaWXBEJw2txLnndtmhmYbjNNCCwQW3lY8uH1NnD8UtX7hqE7H2rZUMccF9GpjB4IZOJpRwUywyVm972US8o80U//xjzi1cgf2jIV0xP66oYPGUfWP5jWHzWQxQvCjNauXvmK3zgwANPAS/WHVE2QDEs1YdEbEAngfzDRTPi0bBrivmVpwAZxsgPiuxc27nggx4tM7bkZWYGd2TUU7Oefc2mB1FidFrd0Z0KtyLcjTrkjpR8CC8IHneJTEW7RYaHo/n/VXH820yN1d1PB/TPZ7/F2AAyI3yXHt1i14AAAAASUVORK5CYII=" alt="collapse 닫기" class="x-button"/>
                </div>
            </div>
            }
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA4CAYAAAHFvesGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABWhJREFUeNpi/P//PwMaEADiDyAGE5qEAkwCDEA6/0MAMv0eRMN0MgJxAJQGAUGwIBY74YAJi9h5kG34dIIFAQIImyRIgBHZyPeo0hAng7AAEhvsiPtQp98nZAdYkgmbi9AtZ0AKCQaAAMIbCjCno7PRTUsA4v1I/AVA3ABlH0C2Cdk0dNORxQSR454RyRYDLBpg/imAxhFKgKJjBSQallbWgx2GRXEAGv8+EJ8H4gQo34BQ6KEDULwLAAQQPucxICXfBGQxFjymgoJaHhpqDrhSFjL+jxYg75Hl0f1ETJzBU8R9qBOQk4wAmgYHZOchO6UBiOejOwcqDleHHEIwAwyg8YLTn7g8j44NoLYRFRBEFxzIORHGfo8Udwy43P0f6q8AbPLoznsPTQHoORaWPf5jKwcE0eILpvgBNN4UiSkjsJYZAAFETCrHh89D/RkALRX/o+cIbHFLDDaAGvYej8XzybVoP9TwAjz5GpZicZqDq9yCuVoAR1H1H0c2wJnqYYz5UAUNBOLCgcg4W4/LImwu/A8tWInNo//xqUNXPB9LaXcfW/mKxzcN2FIfvvrlPxGGMxDpQwZSKmhSAUZVS6rm/2gV/39oFQ0C85HKH0ekFgzJPkLmG8DreNxqcDZTGLAUfv+RGnYTkOQuQA1hhBaQIPn1aJZOgPqSgdKyDht2gCaEfuREwcJAfXAAyVcBsCoaIAAtZnikIAyEUc6xAEugBO2A60ArMFYgVqBWQAneVWAJlKAdYAeUgDCTddbPXZKsmhn+CHETkux7yydmUCmHO0PHtTZaF1L7f+DssyEmQoxKkIaR8BZz7lJnVHt27xh6+QCSVQNbCSLwpwzgVz+R4wudB4jq/P06tGlCRqyRU4PjUmOWFCAEwWYEgk4jbwqiKzjxWSrKSZM6xRGKmAPJBqoG0l4DDiCXXAA2BfXJpUBOmQ0SthrZXbz/WVpfFMMldK6lMiRQsxXScZBe1UnYgefA+szYcxdpUNo3iAFqC0OiLb0jnF5yXkCd3jGgIgYTC5/POiNCjv21TcGEVbdyj5IfCyZK0CyeuUnDnP/thg9NE4FHVCXg1VDC00a6vgu+o1+/xqtVAbtz018V0zFnDcR9bg6mM7Q9m83gEOtY8HVQ+R2UhNsqCbWLLS1b+KMswKiZNRCll7nBUJ+S7TeUuGUBHq978gUlHgqDFftIs7YKZPq3wT7OXYBqrfY2QhiGXjsBIzACI9ANMgIblBG8AeoEuQ1OnSAjtBvQDbgNqHRKpMiyE5skXGuJPwhQnh1/5D1auE5zTWjHYrPab54NoI96acgaYGYiK51NzwZkonQOU+MofE8y5DUH1KEo7IkocOVljSLYPwPQiKKwCqMQHADIAYvCAVUAUYuwyih8IQeYGs7VRqFkEYAqmhVsJ9BWO0kUtIuIjyYOVbTpQFXcNXN57UXMyAFOm9QJvh2kgEoWEY6zuK+UALBMk12lgKwysXFfcURFGzOETm78BOa+0Ww5g+beITMV2ozec4SV5/JlLmG0OlTN5gQ7wpk72EdswqH7UW2KKpslizzS41zCWUuNPjQIt2PLa5CU8FLvLSeDykmmRQevndCKWpvxfMZP0M9rSBGtAPX+uuDfdZCt/rk38plCqm8XFJMtsUV6oqk71OeA+barfXyQAAIC3ETMaUMmZxaGfO9rymxSg0gy/YgE4DViJr+Zdz8jfTfYPdKq3s/ecpColktiCI5nROrUypbwGkMk7kuztKsz4OJ8GrQlvAaLc0MLSRUBLbgtcZSfKKnu2bycBhzFU2xYWPnLgDC4GwEOsF7WmqJtYZ2vlAbdf8gvr5f/Z3dPnr94Iv3q7z3+ZfgFs17c6KlsbuIAAAAASUVORK5CYII=" class="icon-pizza"/>    
        </div>
    );
    
};


export default MainHeader;
