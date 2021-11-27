import { InjectionToken } from "@angular/core";

export const WINDOW = new 
    InjectionToken<Window>('Global window object', {
    factory: () => window
});

export interface ElectronWindow extends Window {
    require(module: string): any;
}


// The Angular and Electron applications are now ready to interact with each other using 
// the IPC mechanism.