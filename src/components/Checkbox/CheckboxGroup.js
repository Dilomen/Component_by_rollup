import React from "react";
import { ConfigConsumer, Checkbox } from "cps";
import { array, func, bool } from "prop-types";
class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if ("value" in nextProps) {
      return {
        value: nextProps.value || [],
      };
    }
    return null;
  }

  getOptions = () => {
    const { options, disabled } = this.props;
    return options.map((option) => {
      // 如果传入的是字符串数组，就组成所需的结构
      if (typeof option === "string") {
        return {
          label: option,
          value: option,
        };
      }
      return option;
    });
  };

  handleGroupChange = (e) => {
    const { onChange } = this.props;
    const { value } = this.state;
    const changeValue = e.target.value;
    let index = value.indexOf(e.target.value);
    if (index === -1) {
      value.push(changeValue);
    } else {
      value.splice(index, 1);
    }
    this.setState({ value }, () => {
      onChange && onChange(value);
    });
  };

  renderGroup = ({ getPrefixCls }) => {
    const { options, disabled } = this.props;
    let { children } = this.props;
    const { value } = this.state;
    const prefixCls = getPrefixCls("checkgroup");
    if (options && options.length > 0) {
      children = this.getOptions().map((option) => (
        <Checkbox
          key={option.value.toString()}
          disabled={"disabled" in option ? option.disabled : disabled}
          checked={value.indexOf(option.value) !== -1}
          value={option.value}
        >
          {option.label}
        </Checkbox>
      ));
    } else {
      children = React.Children.map(children, (child) =>
        React.cloneElement(child, { defaultChecked: value, disabled })
      );
    }
    return (
      <div className={`${prefixCls}-wrap`} onChange={this.handleGroupChange}>
        {children}
      </div>
    );
  };
  render() {
    return <ConfigConsumer>{this.renderGroup}</ConfigConsumer>;
  }
}

CheckboxGroup.defaultProps = {
  options: [],
  value: [],
  disabled: false
};

CheckboxGroup.propTypes = {
  options: array,
  onChange: func,
  value: array,
  disabled: bool
};

export default CheckboxGroup;
