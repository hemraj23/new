import React from 'react';

class SeachBar extends React.Component{
    state = { term : ""}

    onInputChage = (event)=>{
        this.setState({term: event.target.value});
    }

    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }


    render(){
        return(
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="form-group">
                            <input
                                value={this.state.term}
                                type="text" 
                                onChange={this.onInputChage} 
                                placeholder="Search"
                                className="form-control"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SeachBar; 