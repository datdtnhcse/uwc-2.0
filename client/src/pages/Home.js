import "../assets/styles/home.css"

export default function Home() {
    return (
        <div class="top-padding">
            <div class="d-flex justify-content-center">
                <a href="overview" class="btn btn-lg active clr" role="button" aria-pressed="true">Tổng quan</a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="createroute" class="btn btn-lg active clr" role="button" aria-pressed="true">Tạo tuyến</a>
            </div>
            <div class="d-flex justify-content-center">
                <a href="assign" class="btn btn-lg active clr" role="button" aria-pressed="true">Phân ca</a>
            </div>
        </div>
    )
}