import React from 'react'
import classNames from 'classnames';


export class Button extends React.Component {
    render(props) {
        return (
            <button className={classNames('button', {
                'button--outline': this.props.outline
            })}>{this.props.name}</button>
        )
    }
}