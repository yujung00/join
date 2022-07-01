import React from "react";
import styles from './navbar.module.scss';

const navbar = React.memo(() => {
    return (
        <div className={styles.navbar}>
            <nav className={styles.navbarContent}>
                <div className={styles.topNav}>
                    <a href='/'>
                        <div className={styles.serviceInfoBtn}>
                            <p style={{backgroundImage: "url('/icons/nav/icn-gray1-right-arrow.png')"}}>
                                <span>명품 등록·교환</span> 안내
                            </p>
                        </div>
                    </a>

                    <nav>
                        <a className={styles.sign} href='/sign'>회원가입</a>
                        <a>로그인</a>
                        <a>고객센터</a>
                    </nav>
                </div>
                <div className={styles.bottomNav}>
                    <div className={styles.flNav}>
                        <a href='/'>
                            <img className={styles.logo} src='/images/logo/logo.png'/>
                        </a>
                        <div className={styles.search}>
                            <input type='text' placeholder="원하시는 상품을 검색해주세요."/>
                            <img src='/icons/nav/icn-search.png'/>
                        </div>
                    </div>

                    <div className={styles.frNav}>
                        <a>명품찾기</a>
                        <a>명품등록</a>
                        <a><img src='/icons/nav/icn-heart.png' /></a>
                        <a><img src='/icons/nav/icn-document.png' /></a>

                    </div>

                </div>

            </nav>
        </div>
    );
});

export default navbar;