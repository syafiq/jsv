export function getShellName({ shell }, { resolveExecutable }) {
  shell = resolveExecutable(
    { executable: shell },
    { exists: fs.existsSync, readlink: fs.readlinkSync, which: which.sync },
  );

  const shellName = path.win32.basename(shell);
  if (getEscapeFunction(shellName, {}) === undefined) {
    return binCmd;
  }

  return shellName;
}