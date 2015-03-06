var React = require('react/addons');
var Radium = require('radium');
var { StyleResolverMixin } = Radium;

var Form = React.createClass({
  mixins: [ StyleResolverMixin ],

  getDefaultProps: function () {
    return {
      tagName: 'form',
      horizontal: false,
      inline: false
    };
  },

  buildChildren: function (elements) {
    return React.Children.map(elements, function (element) {
      var newProps = {};

      if (this.props.inline) {
        newProps.inline = true;
      }
      if (this.props.horizontal) {
        newProps.horizontal = true;
      }

      return React.addons.cloneWithProps(element, newProps);
    }, this);
  },

  render: function () {
    var { children, tagName: TagName, ...props } = this.props;

    return (
      <TagName {...props}>
        {this.buildChildren(children)}
      </TagName>
    );
  }
});

module.exports = Form;
