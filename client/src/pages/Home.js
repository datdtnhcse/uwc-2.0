import "../assets/styles/home.css"
import "../assets/styles/button.css"


export default function Home() {
    if (!localStorage.getItem("user")) {
        window.location.href = "/login";
    }
    return (
        <div class="top-padding">
            <div class="d-flex justify-content-center">
                <a href="overview" class="btn btn-lg active clr mybtn" role="button" aria-pressed="true">Tổng quan</a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="createroute" class="btn btn-lg active clr mybtn" role="button" aria-pressed="true">Tạo tuyến</a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="assign" class="btn btn-lg active clr mybtn" role="button" aria-pressed="true">Phân ca</a>
            </div>
        </div>
    )
}