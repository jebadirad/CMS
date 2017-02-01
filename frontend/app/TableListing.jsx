import React from 'react';
import ReactDOM from 'react-dom';
export class TableListing extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                headers : ['test1','test2','test3','test4' ],
                data : [
                        ["Table Data", "Table Data", "Table Data", "Table Data"],
                        ["Table Data", "Table Data", "Table Data", "Table Data"],
                        ["Table Data", "Table Data", "Table Data", "Table Data"]
                    ]
            }
    }
        componentDidMount(){
            //this.props.url for ajax.
            //fetch table headers based on something maybe we pass in a url or a type?
    }

    
        render(){
            var closure = this;
            const header = this.state.headers.map(function(head){
                return (<th>{head}</th>);
            });
            const tableData = this.state.data.map(function(row){
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
                    const cells = row.map(function(dataCell, index){return(<td onClick={() => closure.props.onClickItem(1)} key={index}>{dataCell}</td>);});
                    var data = (<tr>{cells}</tr>);
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