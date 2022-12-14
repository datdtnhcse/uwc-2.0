import "../assets/styles/login.css"
import logo from "../assets/img/uwc_logo.png"
import { useEffect, useState, useRef } from "react";
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (event) => {
        const email = emailRef.current.value
        const password = passwordRef.current.value
        event.preventDefault();
        if (email == "admin@gmail.com" && password == "admin") {
            window.location.assign("/overview");
        }
    };
    return (
        <div id="main-wrapper" className="container">
            <div className="row justify-content-center w-100">
                <div className="col-xl-12">
                    <div className="card border-0">
                        <div className="card-body p-0">
                            <div className="row no-gutters">
                                <div className="col-lg-7 d-none d-lg-inline-block">
                                    <img src={logo} className="custom"></img>
                                </div>
                                <div className="col-lg-5">
                                    <div className="p-5">
                                        <div className="mb-5">
                                            <h2 className="h2 font-weight-bold text-theme">Đăng nhập</h2>
                                        </div>
                                        <h6 className="h5 mb-0">Vui vì được gặp bạn!</h6>
                                        <p className="text-muted mt-2 mb-5"></p>
                                        <form onSubmit={handleSubmit}
                                        >
                                            <div className="form-group mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    placeholder="Tên đăng nhập"
                                                    ref={emailRef}
                                                >
                                                </input>
                                            </div>
                                            <div ></div>
                                            <div className="form-group mb-5">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    placeholder="Mật khẩu"
                                                    ref={passwordRef}
                                                >
                                                </input>
                                            </div>
                                            <button type="submit" className="btn-theme">Đăng nhập</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
