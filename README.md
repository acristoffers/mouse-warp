# Mouse Warp

A GNOME Shell extension that moves the mouse cursor to the center of the focused window whenever focus changes.

[<img src="https://raw.githubusercontent.com/andyholmes/gnome-shell-extensions-badge/master/get-it-on-ego.svg?sanitize=true" alt="Get it on GNOME Extensions" height="100" align="middle">][ego]

Useful if you use keyboard shortcuts to switch between windows and want your mouse to follow along automatically.

## Installation

### From GNOME Extensions

Install via [extensions.gnome.org][ego].

### Manual

```bash
git clone https://github.com/acristoffers/mouse-warp.git
cd mouse-warp
make install
gnome-extensions enable mouse-warp@acristoffers.me
```

Then restart GNOME Shell (log out and back in, or press `Alt+F2`, type `r`, Enter on X11).

[ego]: https://extensions.gnome.org/extension/mouse-warp@acristoffers.me
