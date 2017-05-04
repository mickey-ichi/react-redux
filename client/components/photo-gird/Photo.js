import React from 'react';
import {Link} from "react-router";
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {post, i, comments} = this.props;
        return (
            <div className="col-sm-4">
                <div className="gird-photo-wrapper">
                    <Link to={`/view/${post.code}`}>
                        <img className="img-responsive" src={post.display_src} alt={post.caption}/>
                    </Link>
                    <CSSTransitionGroup transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <span key={post.likes} className="likes-heart">
                            {post.likes}
                        </span>
                    </CSSTransitionGroup>
                </div>
                <figurecaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button onClick={this.props.increment(i)} className="likes">&hearts; {post.likes}</button>
                        <Link to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"/>
                                {comments[post.code]? comments[post.code].length: 0}
                            </span>
                        </Link>
                    </div>
                </figurecaption>
            </div>
        )
    }
}

Photo.defaultProps = {
    post: {}
};

Photo.propType = {
    post: React.PropTypes.object.isRequired,
};

export default Photo;