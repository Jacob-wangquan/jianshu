import React, {PureComponent} from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop} from './style';
import Topic from './components/Topic';
import Recomment from './components/Recomment';
import List from './components/List';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import { actionCreators } from './store';

class Home extends PureComponent{

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src='//upload.jianshu.io/admin_banners/web_images/4355/90aa72980ef59c6cb49f851edc095329fb695a92.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recomment />
                    <Writer />
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleToTop}>顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }

    handleToTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },

    changeScrollTopShow() {
        if(document.body.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);