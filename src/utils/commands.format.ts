interface CommandOutput {
  description?: string;
  alias?: string;
}

/**
 * Format command output
 */
export const formatCommands = (commands: { [key: string]: CommandOutput }) => {
  console.log('Commands');
  Object.entries(commands).forEach(([key, value]) => {
    console.log('$', key, '::', value.description || value.alias);
  });
};
