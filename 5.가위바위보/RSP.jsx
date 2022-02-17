import React, {Component} from "react";

// 클래스의 경우 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// (부모가 나를 없앴을 때) -> componentWillUnmount -> 소멸

class RSP extends Component {
    state = {
        result: '',
        imgCoord: 0,
        scord: 0,
    };

    componentDidMount() { // 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 함
    }
    
    componentDidUpdate() { // 리렌더링 후
    }

    componentWillUnmount() { // 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 함
    }

    render() {
        const {score, result, imgCoord} = this.state;
        return (<>
            <div id="computer"
                 style={{background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}/>
            <div>
                <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    </>
    )
        ;
    }
}

export default RSP;