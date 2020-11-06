# External terminal

VS Code can be configured to open your current directory in an external terminal
("Open New External Terminal" or CMD SHIFT C with Atom Keymap). You can
configure it to a different app than the default one like below:

```json
{
  "terminal.external.osxExec": "iTerm.app"
}
```

iTerm will by default open a new tab with the directory instead of a whole new
window.
