var logState = false;
var sideBarDisplay = false;

export function toggleLogState(): void {
    logState = !logState;
}

export function getLogState(): Boolean {
    return logState;
}


export function toggleSidebar(): void {
    sideBarDisplay = !sideBarDisplay;
}

export function getSidebar(): Boolean {
    return sideBarDisplay;
}

export function disableSidebar(): void {
    sideBarDisplay = false;
}