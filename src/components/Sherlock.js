import React, { Component } from 'react'
import Form from './Form'
import {connect} from 'react-redux'
import { addVillain } from '../actions/villains'

class Sherlock extends Component {

    handleAddVillain = ([name, dangerLevel, mo]) => {
        this.props.addNewVillain({name, dangerLevel, mo})
    }

    render() {
        return (
            <div>
                <h1>Sherlock</h1>
                <h3>Villains</h3>
                <Form 
                    inputs={['Name', 'Danger Level', 'M.O.']}
                    submitCallback={this.handleAddVillain}
                    submitValue={'Add Villain'}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addNewVillain: info => dispatch(addVillain(info))
})

export default connect(null, mapDispatchToProps)(Sherlock)
