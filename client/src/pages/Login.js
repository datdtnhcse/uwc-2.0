import "../assets/styles/login.css"
import logo from "../assets/img/uwc_logo.png"
export default function Login() {
    return (
        <div id="main-wrapper" class="container">
            <div class="row justify-content-center w-100">
                <div class="col-xl-12">
                    <div class="card border-0">
                        <div class="card-body p-0">
                            <div class="row no-gutters">

                                <div class="col-lg-6 d-none d-lg-inline-block">
                                    {/* <div class="account-block rounded-right">
                                        <div class="overlay rounded-right"></div>
                                        <div class="account-testimonial">
                                            <h4 class="text-white mb-4">This  beautiful theme yours!</h4>
                                            <p class="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                                            <p>- Admin User</p>
                                        </div>
                                    </div> */}
                                    <img src={logo}></img>
                                </div>

                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="mb-5">
                                            <h2 class="h2 font-weight-bold text-theme">Đăng nhập</h2>
                                        </div>

                                        <h6 class="h5 mb-0">Vui vì được gặp bạn!</h6>
                                        <p class="text-muted mt-2 mb-5"></p>

                                        <form>
                                            <div class="form-group mb-3">
                                                {/* <label for="exampleInputEmail1">Tên đăng nhập</label> */}
                                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Tên đăng nhập"></input>
                                            </div>
                                            <div ></div>
                                            <div class="form-group mb-5">
                                                {/* <label for="exampleInputPassword1">Mật khẩu</label> */}
                                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mật khẩu"></input>
                                            </div>
                                            <button type="submit" class="btn-theme">Đăng nhập</button>
                                            {/* <a href="#l" class="forgot-link float-right text-primary">Forgot password?</a> */}
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* <p class="text-muted text-center mt-3 mb-0">Don't have an account? <a href="register.html" class="text-primary ml-1">register</a></p> */}

                </div>
            </div>
        </div>
    )
}