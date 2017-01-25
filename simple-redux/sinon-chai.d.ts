/// <reference types="chai" />

declare global {

    export namespace Chai {
        import SinonSpy = Sinon.SinonSpy;

        interface Assertion {
            callCount( count: number ): Assertion;
            calledAfter( spy:SinonSpy );
            calledOnce(): Assertion;
            calledWithExactly( ...args ): Assertion;
        }
    }
}

declare namespace sinonChai { }
export = sinonChai;
