interface CommandOutput {
    description?: string;
    alias?: string;
}
export declare const formatCommands: (commands: {
    [key: string]: CommandOutput;
}) => void;
export declare const formatLibraryCommands: (commands: any) => void;
export {};
