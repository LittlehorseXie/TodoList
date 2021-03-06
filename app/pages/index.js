import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import routeConfig from './route.js'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

@autobind
class HelloWorld extends Component {
  @CSS({
    '.box': {
      background: '#000'
    }
  })
  handleClick(e) {
    console.log(e)
  }
  render() {
    return (
      <div className="box">
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
        {routeConfig.map((route, index) => (
          <SubMenu key={index} title={<span><Icon type={route.icon} /><span>{route.title}</span></span>}>
              {route.children.map((child, index) => (
                <Menu.Item key={'sub' + index}>{child.title}</Menu.Item>
              ))}
          </SubMenu>
        ))}
        </Menu>
      </div>
    );
  }
}

export default HelloWorld