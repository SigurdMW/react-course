var React = require('react');


var CustomerList = React.createClass({
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

module.exports = CustomerList;