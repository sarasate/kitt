interface CommandOutput {
    description?: string;
    alias?: string;
}
export declare const formatCommands: (commands: {
    [key: string]: CommandOutput;
}) => string;
export declare const formatLibraryCommands: (commands: any, numbered?: boolean) => string;
export {};
