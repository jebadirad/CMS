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
            //fetch table headers based on something maybe we pass in a url or a type?
    }

    
        render(){
            const header = this.state.headers.map(function(head){
                return (<th>{head}</th>);
            });
            const tableData = this.state.data.map(function(row){
                const data = row.map(function(dataCell){
                    return(<td>{dataCell}</td>);
                });
                return (<tr>{data}</tr>);
            })

            return(
                <div className="uk-section">
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
                </div>

            );
        }
}