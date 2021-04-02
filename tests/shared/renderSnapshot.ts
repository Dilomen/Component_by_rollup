import React from "react";
import renderer from 'react-test-renderer';

function rtlElm(Component: React.ComponentType): void {
    describe("component could be rendered snapshots without conflict", (): void => {
        it("render Snapshots", () => {
            const tree = renderer.create(
                Component
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
}

export default rtlElm