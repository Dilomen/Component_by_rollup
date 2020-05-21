import React from "react";

// 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效  createContext(defaultValue)
const ConfigContext = React.createContext({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return `serein-${suffixCls}`;
  },
});

const { Provider, Consumer } = ConfigContext;

class ConfigProvider extends React.Component {
  // 如果组件Provider包裹，就使用该getPrefixCls，否则使用默认的
  getPrefixCls = (suffixCls, customizePrefixCls) => {
    const { prefixCls = 'serein' } = this.props;
    if (customizePrefixCls) return customizePrefixCls;
    return `${prefixCls}-${suffixCls}`;
  };
  
  renderProvider = (context) => {
    const {children, value} = this.props
    const config = {
      ...context,
      getPrefixCls: this.getPrefixCls,
      ...value,
    };
    return <Provider value={config}>
        {children}
    </Provider>      
  };
  render() {
      return (
        <Consumer>
            {context => this.renderProvider(context)}
        </Consumer>   
      )
  }
}

export {
    ConfigProvider,
    Consumer as ConfigConsumer
}