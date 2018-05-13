import React from 'react'

var TestApp = React.createClass({

    getComponent(e, index) {
        $(e.target).css({
            'background-color': '#1e838d'
        })
    },
    render: function(){

        const options = this.props.results.map(r => (
          <li key={r.id} onClick={(e) => this.getComponent(e, 1)}>
            <span className="text-blue">{r.productName}</span>
            <p>ID : {r.id}</p>
            <p>Type Name : {r.typeName}</p>
            <p>Substance Name : {r.substanceName} </p>
          </li>
        ))
        return <div className="search-list">
                <ul>{options}</ul>
          </div>
    }
})

export default TestApp



