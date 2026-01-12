declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
        el?: HTMLElement;
        name?: string;
        offset?: [number, number];
        repeat?: boolean;
        smooth?: boolean;
        smoothMobile?: boolean;
        direction?: 'vertical' | 'horizontal';
        lerp?: number;
        class?: string;
        scrollbarClass?: string;
        scrollingClass?: string;
        draggingClass?: string;
        smoothClass?: string;
        initClass?: string;
        getSpeed?: boolean;
        getDirection?: boolean;
        multiplier?: number;
        firefoxMultiplier?: number;
        touchMultiplier?: number;
        scrollFromAnywhere?: boolean;
        smartphone?: {
            smooth?: boolean;
            direction?: 'vertical' | 'horizontal';
            horizontalGesture?: boolean;
        };
        tablet?: {
            smooth?: boolean;
            direction?: 'vertical' | 'horizontal';
            horizontalGesture?: boolean;
            breakpoint?: number;
        };
        reloadOnContextChange?: boolean;
        resetNativeScroll?: boolean;
    }

    interface ScrollToOptions {
        offset?: number;
        callback?: () => void;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
    }

    export default class LocomotiveScroll {
        constructor(options?: LocomotiveScrollOptions);
        init(): void;
        update(): void;
        destroy(): void;
        start(): void;
        stop(): void;
        scrollTo(target: string | number | HTMLElement, options?: ScrollToOptions): void;
        on(event: string, callback: (args: unknown) => void): void;
        off(event: string, callback: (args: unknown) => void): void;
    }
}
