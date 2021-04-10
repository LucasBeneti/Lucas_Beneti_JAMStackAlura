import propToStyle from './index';

describe('propToStyle()', () => {
  describe('when receives simple argument', () => {
    it("and it's a string", () => {
      const propToStyleRes = propToStyle('display');
      const componentProps = { display: 'flex' };
      const styleResult = propToStyleRes(componentProps);
      expect(styleResult).toEqual({ display: 'flex' });
    });

    it("and it's a number", () => {
      const propToStyleRes = propToStyle('flex');
      const componentProps = { flex: 1 };
      const styleResult = propToStyleRes(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when receives an object of breakpoints', () => {
    it('renders only one breakpoint resolution', () => {
      const propToStyleRes = propToStyle('display');
      const componentProps = { display: { xs: 'flex' } };
      const styleResult = propToStyleRes(componentProps);
      expect(styleResult).toMatchSnapshot();
    });

    it('renders more breakpoints resolutions', () => {
      const propToStyleRes = propToStyle('display');
      const componentProps = { display: { xs: 'flex', md: 'grid' } };
      const styleResult = propToStyleRes(componentProps);
      expect(styleResult).toMatchSnapshot();
    });
  });
});
