var React = require('react');

// MAIN CLASS
var Main = React.createClass({
   closeGlobalMenu: function(){
    document.querySelector('.leftside-menu').classList.remove('open');
    document.querySelector('.leftside-menu__overlay').classList.remove('show');
  },
  render: function(){
    return (
      <div>
        <LeftSideMenu />
        <div className="leftside-menu__overlay" onClick={this.closeGlobalMenu}></div>
        <MainContentContainer content={this.props.children} />
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
        <LeftSideMenyBody menuItems={[{key: 1, text: 'Kunder', url: '#/customers'}, {key: 2, text: 'Programmer', url:'#programs'}, {key: 3, text: 'Kalender', url: '#link3'}]} /> 
        <LeftSideMenuFooter avatarImage="http://ptskisser.webawesome.no/redesign/img/ivar.PNG" avatarImageAltDesc="Ivar Åsen" />
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
        <ContentContainer content={this.props.content} />
      </div>
    );
  }
});

var TopBanner = React.createClass({
  toggleMenu: function(){
    document.querySelector('.leftside-menu').classList.toggle('open');
    document.querySelector('.leftside-menu__overlay').classList.toggle('show');
  },
  render: function(){
    return (
      <div className="topbanner white">
        <div className="topbanner__content">
          <a href="javascript:;" onClick={this.toggleMenu} className="leftside-menu__trigger">
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
      {this.props.content}
      </div>
    );
  }
});

module.exports = Main;