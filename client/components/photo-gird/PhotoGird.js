import React from 'react';
import {connect} from 'react-redux';
import Photo from './Photo';
import {increment} from '../../action/actionCreators';

class PhotoGird extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<div>
            {
                this.props.posts.map((post, i) => {
                    return <Photo {...this.props} key={i} post={post}/>
                })
            }
        </div>)
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts, comments: state.comments }
};

const mapDispatchToProps = (dispatch, props) => {
    console.log(props, dispatch);
    return {
        increment: (index) => {
            dispatch(increment(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGird);