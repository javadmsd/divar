import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css";

function Home() {
  return (
    <div className="container">
      <Header />

      <div className="banner">
        <h1>
          چرا دیوار <br />
          بهترین گزینه برای انتشار
          <br />و مدیریت آگهی آنلاین املاک است؟
        </h1>
      </div>

      <Link className="about" to="/about">
        برو به صفحه درباره ما
      </Link>
    </div>
  );
}

export default Home;
