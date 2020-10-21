import React from "react";
import "./App.css";
import { Layout } from "antd";
import CityTextBar from "./components/CityTextBar/CityTextBar";
import CardsList from "./components/CardsList/CardsList";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout
        style={{
          height: "100vh",
          minHeight: "760px",
        }}
      >
        <Header
          style={{
            color: "#fff",
            fontSize: "32px",
            zIndex: 999,
            backgroundColor: "transparent"
          }}
        >
          Metty
        </Header>
        <Content>
          <div className="city-bg" />
          <div className="city-bg-overlay" />
          <Layout>
            <CityTextBar />
          </Layout>
          <Layout>
            <CardsList />
          </Layout>
        </Content>
        <Footer
          style={{ zIndex: 999, color: "#ccc", backgroundColor: "transparent" }}
        >
          Created by Ayan Banerjeee
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
