import ReactDOM from 'react-dom/client';
import React from 'react';
import Clock from './Clock';
import Promo from './Promo';
import Footer from './Footer';
import Promos from './Promos';
import './App.css';
import PromoBackground from '../public/images/277831701_352815556803370_6307768631258701992_n.png';
import FoxHead from '../public/images/fox_head.png';

class App extends React.Component {

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

  render() {

    const style = {
      backgroundImage: `url(${PromoBackground})`,
      backgroundSize: 'cover',
    };

    const promo = Promos.getCurrentPromo();
    console.log(promo);
    if (promo) {
      return (
        <div id='app' style={style}>
          <Promo promo={promo} />
          <Footer />
        </div>
      )
    }

    return (
      <div id='app' style={style}>
        <img id='foxhead' src={`${FoxHead}`}></img>
        <Clock />
        <Footer />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);