import React from 'react'
import {connect} from 'react-redux'
import {fetchStream, editStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component
{
    componentDidMount()
    {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues)=>
    {
        this.props.editStream(this.props.match.params.id,formValues)
    }
    render()
    {
        if(!this.props.stream)
        {
            return <div>Loading...</div>
        }
        return(
            <div>
                <h3>Edit the stream</h3>
                <StreamForm initialValues={{title:this.props.stream.title, description:this.props.stream.description}} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const MapStateToProps = (state,getProps)=>
{
    return {stream: state.streams[getProps.match.params.id]}
}

export default connect(MapStateToProps,{fetchStream,editStream})(StreamEdit)