import React from 'react'
import { connect } from 'react-redux'
import Villain from './Villain'
import {arrestVillain} from '../actions/villains'



function Mycroft(props) {


    const renderVillains = () => props.villains.map(v => (
        <Villain villain={v} key={v.name} villainCallback={handleArrestVillain}/>
    ))

    const handleArrestVillain = villain => {
        props.arrestVillain(villain)
    }

    return (
        <>
            <h1>Mycroft</h1>
            <div>
                <h3>Villain List</h3>
                <ul>
                    {renderVillains()}
                </ul>
            </div>
        </>
    )
}


const mapStateToProps = ({villains}) => ({
    villains
})

const mapDispatchToProps = dispatch => ({
    arrestVillain: obj => dispatch(arrestVillain(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Mycroft)
