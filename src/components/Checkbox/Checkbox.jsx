/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './index.scss';
import {
  bool, func, string, oneOfType, array,
} from 'prop-types';
import { ConfigConsumer } from 'cps';
import Classnames from 'classnames';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const { defaultChecked, value } = props;
    let initChecked = false;
    if (props.defaultChecked) {
      initChecked = Array.isArray(defaultChecked)
        ? defaultChecked.includes(value)
        : defaultChecked;
    }
    const checked = 'checked' in props ? props.checked : initChecked;
    this.state = {
      checked,
    };
    this.input = React.createRef();
  }

  static getDerivedStateFromProps (props, state) {
    if ('checked' in props) {
      return {
        ...state,
        checked: props.checked,
      };
    }
    return null;
  }

  handleChange = (e) => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: e.target.checked,
      });
    }
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(e);
  };

  focus () {
    this.input.focus();
  }

  blur () {
    this.input.blur();
  }

  renderCheckbox = ({ getPrefixCls }) => {
    const {
      disabled,
      children,
      onChange,
      className,
      value,
      ...others
    } = this.props;
    const { checked } = this.state;
    const globalProps = Object.keys(others).reduce((prev, key) => {
      if (
        key.substr(0, 5) === 'aria-'
        || key.substr(0, 5) === 'data-'
        || key === 'role'
      ) {
        prev[key] = others[key];
      }
      return prev;
    }, {});

    const prefixCls = getPrefixCls('checkbox');
    const classes = Classnames(
      {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-checked`]: checked,
      },
      className,
    );
    return (
      <label className={`${prefixCls}-wrap ${classes}`}>
        <input
          ref={this.input}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={this.handleChange}
          value={value}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...globalProps}
        />
        <span>{children}</span>
      </label>
    );
  };

  render () {
    return <ConfigConsumer>{this.renderCheckbox}</ConfigConsumer>;
  }
}

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  className: '',
  checked: false,
  onChange: () => {},
  children: [],
  value: '',
};

Checkbox.propTypes = {
  defaultChecked: oneOfType([bool, array]),
  checked: bool,
  disabled: bool,
  onChange: func,
  className: string,
  children: React.Children,
  value: '',
};
export default Checkbox;
