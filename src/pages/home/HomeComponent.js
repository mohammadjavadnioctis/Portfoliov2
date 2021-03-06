import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Contact from "../contact/ContactComponent";
import Projects from "../projects/Projects";
import ParticlesContainer from "../../components/particles/ParticlesContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <ParticlesContainer/>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Contact hidden={true} theme={this.props.theme} />
        <Projects hidden={true} theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
