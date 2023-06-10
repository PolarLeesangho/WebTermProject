import NavigationMyPage from './NavigationMyPage';
import {Fragment, useState, useEffect} from "react";
import {arrayContentsToString, makeHttpRequest} from "./util";

async function selectUser(userId) {
    return makeHttpRequest('http://127.0.0.1:3001/searchUserInfo', {'Content-Type': 'application/json'}, { userId : userId });
}

async function updateUserAddress(userId, address) {
    return makeHttpRequest('http://127.0.0.1:3001/updateUserInfo', {'Content-Type': 'application/json'}, { userId : userId, address : address});
}
function UpdateUserInfo(){
    let userId = 1;
    const userInfo = {
        name: '이름',
        id: userId,
        uid: 'id',
        phoneNum: '전화번호',
        birthday: '생년월일',
        email: '이메일',
        address: '주소'
    }
    let [user, setUser] = useState(userInfo);
    let [address, setAddress] = useState("");
    let [edit, setEdit] = useState(0);
    
    useEffect(()=>{
        selectUser(userId).then((res)=>{
            if(edit == 0){
                setUser({
                    ...user, 
                    uid: res[0].uid, 
                    name: res[0].name,
                    email: res[0].email, 
                    phoneNum: res[0].phone_num,
                    address: res[0].address, 
                    birthday: res[0].birthday +  ((res[0].gender == 1 || res[0].gender == 3)?" (남성)":" (여성)")
                })
            }
            console.log(setUser);
        });
    },[edit]);
        return (makeHtml(user, setUser, address, setAddress, edit, setEdit)
    );
}

function makeHtml(user, setUser, address, setAddress, edit, setEdit){
    return (
        <div className='page'>
        <div className='subpage'>
            <h1>나의 기본 정보</h1>
            <div>     
                {user.name}
            </div>
            <div>            
                {user.uid}
            </div>
            <div>            
                <input type="text" id="password" name="password" placeholder='비밀번호(8~16자리 영문/ 순자 조합)'/>
            </div>
            <div>            
                <input type="text" id="password-check" name="password-check" placeholder='비밀번호 확인(8~16자리 영문/숫자 조합)'/>
            </div>
            <div>            
                <input type="text" id="phone-num" name="phone-num" placeholder={user.phoneNum}/>
            </div>
            <div>            
                {user.birthday}
            </div>
            <div>            
                <input type="text" id="email" name="email" placeholder={user.email}/>
            </div>
            <div>            
                <input type="text" id="address" name="address" placeholder={user.address} onChange={(e) => setAddress(e.target.value)}/>
                <button
                onClick={() => {
                    setUser({...user, address: address});
                    setEdit(1);
                }}
                >
                주소 찾기
                </button>
            </div>
            <div>                    
                <button className='button' id='left-button'
                onClick={() => {
                }}
                >
                취소
                </button>

                <button className='button' id='right-button'
                onClick={() => {
                    setUser({...user, address: address});
                    setEdit(1);
                    updateUserAddress(user.id, address)
                    setEdit(2)
                    alert("정보가 수정되었습니다.")
                }}
                >
                확인
                </button>
            </div>
        </div>
    </div>
    );
}

export default UpdateUserInfo;
