declare namespace Sinon {

    interface SinonSpyStatic {
        (): SinonSpy;
        ( func: any ): SinonSpy;
        ( obj: any, method: string ): SinonSpy;
    }

    interface SinonStatic {
        spy: SinonSpyStatic;
    }

    interface SinonSpy {
        // Properties
        callCount: number;
        called: boolean;
        notCalled: boolean;
        calledOnce: boolean;
        calledTwice: boolean;
        calledThrice: boolean;
    }

}

declare var sinon: Sinon.SinonStatic;

declare module 'sinon' {
    export = sinon;
}
