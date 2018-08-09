import React, {PureComponent} from 'react';
import {RecommentWrapper, RecommenItem} from '../style';
import { connect } from 'react-redux';

class Recomment extends PureComponent{
    render() {
        return (
            <RecommentWrapper>
                {
                    this.props.list.map((item)=> {
                        return <RecommenItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommenItem>
                    })
                }
            </RecommentWrapper>
        )
    }
}

const mapState = (state)=> ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recomment);