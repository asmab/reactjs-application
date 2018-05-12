import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const titleFormatter = (cell, row) => {
  return `<a href=${row.watchHref} target="_blank">${cell}</a>`;
};

function something (cell, row) {
    return (
    <div>
    </div>);
}



class PatientList extends React.Component {

    constructor(props) {
        super(props);
        
        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };


        this.state = {selectedPatientId: undefined};

        this.handleAddPatient = props.handleAddPatient.bind(this);
    }



    render() {


        return (
            <BootstrapTable data={this.props.patients}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="firstname"
                    dataFormat={titleFormatter} 
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Name
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="email"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Email
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField="birthday"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Birthday
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="phoneNumber"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Phone Number
                </TableHeaderColumn>              
            </BootstrapTable>
        );
    }

}



PatientList.propTypes = {
    patients: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default PatientList;
