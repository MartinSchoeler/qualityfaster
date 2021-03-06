import AccountSummary from './account-summary.jsx';

const {renderIntoDocument} = React.addons.TestUtils;

describe('Account Summary Component', function () {
  describe('render', function () {
    it('shows the balance', function () {
      const instance = renderIntoDocument(
        <AccountSummary account={{balance: 10}}/>
      );
      const element = ReactDOM.findDOMNode(instance);

      expect($(element).text()).toBe('$ 10');
    });
  });
});
