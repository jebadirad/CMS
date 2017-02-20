import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
export default class TableListing extends React.Component{

        constructor(props){
            super(props);
            
    }
        componentDidMount(){
    }

    
        render(){
            var closure = this;
            const header = this.props.headers.map(function(head){
                return (<th>{head}</th>);
            });
            const tableData = this.props.data.map(function(row){
                var include = false;
                if(closure.props.filter){
                    for(var i = 0; i < row.length; i++){
                        if(row[i].indexOf(closure.props.filter) > -1){
                            include = true;
                            break;
                        }
                    }
                }else{
                   include = true; 
                }
                if(include){
                    const cells = row.map(function(dataCell, index){return(<td>{dataCell}</td>);});
                    var data = (<tr  onClick={() => closure.props.onClickItem(row[0])} key={row[0]}>{cells}</tr>);
                }else{
                    const data = null;
                }
            return data;

            });

            return(
                    <table className="uk-table uk-table-striped">
                        <thead>
                            <tr>
                                {header}
                            </tr>
                        </thead>
                        <tbody>
                             {tableData}
                        </tbody>
                    </table>
            );
        }
}