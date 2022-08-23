import React, { Component } from 'react';
import Menu from "../Overview/Menu.restaurant";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    "https://b.zmtcdn.com/data/menus/278/18694278/6b977f8ccbda02a1797ef92b999f309f.jpg",
    "https://b.zmtcdn.com/data/menus/278/18694278/a814de54999da197096acded28c1d904.jpg",
    "https://b.zmtcdn.com/data/menus/278/18694278/3acfa79dd9a8f1aa6f94fc3054b8977a.jpg",
    "https://b.zmtcdn.com/data/menus/278/18694278/1d7a5dd422fd329ce7777969160e6751.jpg"
];

export default class MenuComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="w-full pb-20">
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          <div className="">
            <Menu />
          </div>
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}