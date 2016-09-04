var React = require('react');
var ReactDOM = require('react-dom');

// where in the DOM to show the app
var mainAppElement = document.getElementById('app');




/*
#
#   COMPONENTS
#
*/

// MAIN CLASS
var MainClass = React.createClass({
  render: function(){
    return (
      <div>
        <LeftSideMenu />
        <MainContentContainer />
      </div>
    );
  }
});

// LEFTSIDE MENU 

var LeftSideMenu = React.createClass({
  render: function(){
    
    return (
      <div className="leftside-menu">
        <LeftSideMenuHeader logoUrl="http://ptskisser.webawesome.no/redesign/img/logo.svg" logoAltDesc="Whistle logo" />
        <LeftSideMenyBody menuItems={[{key: 1, text: 'Kunder', url: '#link'}, {key: 2, text: 'Programmer', url:'#programs'}, {key: 3, text: 'Kalender', url: '#link3'}]} /> 
        <LeftSideMenuFooter avatarImage="http://ptskisser.webawesome.no/redesign/img/ivar.PNG" avatarImageAltDesc="Ivar Åsen" />
        <div className="leftside-menu__overlay"></div>
      </div>
    )
  }
});

var LeftSideMenuHeader = React.createClass({
  propTypes: {
    logoUrl: React.PropTypes.string.isRequired,
    logoAltDesc: React.PropTypes.string
  },
  render: function(){
    return (
        <div className="leftside-menu__header">
          <a href="/">
            <img src={this.props.logoUrl} alt={this.props.logoAltDesc} />
          </a>
        </div>
    );
  }
});

var LeftSideMenyBody = React.createClass({
  propTypes: {
    menuItems: React.PropTypes.array.isRequired
  },
  render: function(){
    var menuLinks = this.props.menuItems.map(function(item){
      return (<li className="leftside-menu-item"><a href={item.url}>{item.text}</a></li>);
    });
    return (
      <div className="leftside-menu__body">
        <nav>
          <ul>
            {menuLinks}
          </ul>
        </nav>
      </div>
    );
  }
});

var LeftSideMenuFooter = React.createClass({
  propTypes: {
    avatarImage: React.PropTypes.string.isRequired,
    avatarImageAltDesc: React.PropTypes.string
  },
  render: function(){
    return (
      <div className="leftside-menu__footer">
        <a href="javascript:;" className="leftside-menu__footer-link">
          <img src={this.props.avatarImage} alt={this.props.avatarImageAltDesc} />
          <div>Ivar Åsen</div>
        </a>
      </div>
    );
  }
});


// Content
var MainContentContainer = React.createClass({
  render: function(){
    return (
      <div className="content">
        <TopBanner />
        <ContentContainer />
      </div>
    );
  }
});

var TopBanner = React.createClass({
  render: function(){
    return (
      <div className="topbanner white">
        <div className="topbanner__content">
          <a href="javascript:;" className="leftside-menu__trigger">
            <img src="http://ptskisser.webawesome.no/redesign/img/hamburger.svg" alt="global menu" />
          </a>
          <a className="topbanner__search-link" href="javascript:;">
            <img src="http://ptskisser.webawesome.no/redesign/img/search.PNG" alt="search icon" />
          </a>
          <div className="row topbanner__bottom-row">
            <div className="col-md-12">
              <div className="content-container">
                <h1>Dashboard</h1>
              </div>
            </div>
            <div className="col-md-12 topbanner__bottom-row-last">
              <div className="content-container">
                <span className="mute-text x-small"></span>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
});

var ContentContainer = React.createClass({
  render: function(){
    return (
      <div className="content-container main-content">
        <CustomerListOverview />
      </div>
    );
  }
});

var CustomerListOverview = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="white full-width to-top">
            <table className="table" id="wage">
            <thead>
              <tr>
                <th></th>
                <th>Navn</th>
                <th>E-post</th>
                <th>Ant. prog.</th>
                <th>Neste time</th>
                <th>Sist endret</th>
              </tr>
            </thead>
            <tbody>
              <tr data-user-id="1" tabIndex="0" className="first-row">
                <td><img className="table__client-photo" src="http://ptskisser.webawesome.no/redesign/img/client.PNG" alt="Jakob Næss" /></td>
                <td>Jakob Næss</td>
                <td>jakon.ness@gmail.com</td>
                <td>3</td>
                <td>02.12.2012</td>
                <td>02.12.2012</td>
              </tr>
              <tr data-user-id="2" tabIndex="0">
                <td><img className="table__client-photo" src="http://ptskisser.webawesome.no/redesign/img/client.PNG" alt="Jakob Næss" /></td>
                <td>Sigurd Moland Wahl</td>
                <td>sigurdmwahl@gmail.com</td>
                <td>1</td>
                <td>13.04.2014</td>
                <td>28.08.2016</td>
              </tr>
              <tr data-user-id="3" tabIndex="0">
                <td><img className="table__client-photo" src="http://ptskisser.webawesome.no/redesign/img/client.PNG" alt="Jakob Næss" /></td>
                <td>Nils Fredrik Kleven</td>
                <td>nfkleven@gmail.com</td>
                <td>6</td>
                <td>11.01.2013</td>
                <td>21.05.2014</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <MainClass />,
  mainAppElement
);

