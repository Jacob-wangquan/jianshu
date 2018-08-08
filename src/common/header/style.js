import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
   height:58px;
   border-bottom: 1px solid #f0f0f0;
   position: relative;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    height:58px;
    width:100px;
    position: absolute;
    top:0;
    left: 0;
    dispaly: block;
    background: url(${logoPic});
    background-size: contain;
`;


export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right: 70px;
    box-sizing: border-box; 
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width:30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
    
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:160px;
    height: 38px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width: 200px;
    }
    &.slide-enter{
        width:160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width:200px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;
export const Button = styled.div`
    float: right; 
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left：0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    color: #969696;
    line-height: 20px;
    font-size: 14px;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 5px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #787878;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;