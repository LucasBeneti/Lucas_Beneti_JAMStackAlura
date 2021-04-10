import { breakpointsMedia } from './index';

describe('breakpointsMedia()', () => {
  describe('receives object of breakpoints and creates media query for it', () => {
    describe('giving only one breakpoint', () => {
      it('should return only one breakpointm media query', () => {
        const cssBreakpoints = {
          qualquerCoisa: {
            xs: 'qualquer',
          },
        };
        const breakpointsMediaRes = breakpointsMedia(cssBreakpoints);
        expect(breakpointsMediaRes).toMatchInlineSnapshot(`
          Array [
            undefined,
          ]
        `);
      });
    });
    describe('giving more than one breakpoint', () => {
      it('should return all specified', () => {
        const cssBreakpoints = {
          qualquerCoisa: {
            xs: 'qualquer',
            md: 'qualquer 2',
            xl: 'qualquer 3',
          },
        };
        const breakpointsMediaRes = breakpointsMedia(cssBreakpoints);
        expect(breakpointsMediaRes).toMatchInlineSnapshot(`
          Array [
            undefined,
          ]
        `);
      });
    });

    it('passing non existing breakpoints', () => {
      const cssBreakpoints = {
        qualquerCoisa: {
          aa: 'qualquer',
        },
      };
      const breakpointsMediaRes = breakpointsMedia(cssBreakpoints);
      expect(breakpointsMediaRes).toEqual([undefined]);
    });
  });
});
