import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style';

import {actionCreators}  from './store';
import { toJS } from 'immutable';
import { Link } from 'react-router-dom';

class Header extends Component {
    getListArea() {
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList =  [];
        if(newList.length){
            for(let i=page * 5; i< (page + 1) * 5;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
            }
        }
        
        if(focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                   <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch 
                                    onClick={()=> handleChangePage(page, totalPage, this.spinIcon)}
                                >
                                <i ref={(icon)=> {this.spinIcon=icon}} className="iconfont spin">&#xe7d1;</i>
                                    换一换
                                </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                {pageList}
                            </SearchInfoList>         
                 </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render () {
        const {focused, handleInputFocus, handleInputBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo  />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                            className={focused ? 'focused' : ''}
                            onFocus={() => handleInputFocus(list)}
                            onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                    
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6dd;</i>

                        {this.getListArea()}
                    </SearchWrapper>
                
                </Nav>
                <Addition>
                    <Button className="writing"><i className="iconfont">&#xe610;</i>写文章</Button>
                    <Button className="reg">注册</Button>                   
                </Addition>
        </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList());      
            }
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if(originAngle){
                originAngle = parseInt(originAngle, 10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
            if(page < totalPage -1){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(0));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);