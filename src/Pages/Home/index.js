import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import SearchCategory from "../../components/SearchCategory";
import "./style.css";
import Category from "../../components/Category";
import Container from "../../components/Container";
import MainCategory from "../../components/MainCategory";
export default function App() {
  return (
    <div className="page">
      <div className="header">
        {" "}
        <NavBar />
        <Header />
        <section>
          <h1>Book your beauty and wellness appointments instantly </h1>
          <SearchCategory />
        </section>
      </div>

      <section className="category-slider">
        <Container>
          <div className="category-list">
            <Category />
          </div>
        </Container>
      </section>

      <section>
        <img
          className="photo"
          src="https://dev.boka.co/_next/image/?url=https%3A%2F%2Fdev-boka-files.s3.amazonaws.com%2FCM%2FBanners%2Fbanner.png&w=1920&q=75"
        />
      </section>
      <section className="main-category-slider">
        <Container>
          <MainCategory />
        </Container>
      </section>
    </div>
  );
}
