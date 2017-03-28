import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {NavUrls} from './Constants.jsx';
export default class TableListing extends React.Component{

        constructor(props){
            super(props);
            this.onClickItem = this.onClickItem.bind(this);
            
    }
        componentDidMount(){
    }
    onClickItem(item){
        this.props.router.push(
            {pathname : this.props.url + '/edit/' + item});
    }
        render(){
            var closure = this;
            const header = this.props.headers.map(function(head, index){
                return (<th key={index}>{head}</th>);
            });
            const tableData = this.props.data.map(function(row){
                var include = false;
                if(closure.props.filter){
                    //check title and check slug. should make this an obj later.
                    for(var prop in row){
                        if(row.hasOwnProperty(prop) && row[prop].indexOf && row[prop].toLowerCase().indexOf(closure.props.filter.toLowerCase()) > -1){
                                include = true;
                                break;
                            }
                    }
                }else{
                   include = true; 
                }
                if(include){
                    const cells = row.map(function(dataCell, index){return(<td key={index}>{dataCell}</td>);});
                    var data = (<tr  onClick={() => closure.onClickItem(row[0])} key={row[0]}>{cells}</tr>);
                }else{
                    const data = null;
                }
            return data;

            });

            return(
                    <table className="uk-table uk-table-striped">
                        <thead>
                            <tr key="-1">
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