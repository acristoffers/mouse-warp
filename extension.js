import Clutter from "gi://Clutter";
import Meta from "gi://Meta";
import { overview } from "resource:///org/gnome/shell/ui/main.js";
import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";

export default class MouseWarp extends Extension {
    enable() {
        this._focusSignal = global.display.connect(
            "notify::focus-window",
            () => this._onFocusChanged(),
        );
    }

    disable() {
        if (this._focusSignal) {
            global.display.disconnect(this._focusSignal);
            this._focusSignal = null;
        }
    }

    _onFocusChanged() {
        const win = global.display.focus_window;
        if (!win) return;
        if (win.get_window_type() !== Meta.WindowType.NORMAL) return;
        if (overview.visible) return;

        const rect = win.get_frame_rect();
        // Ignore tiny windows (e.g. xdg-copy creates a 1x1 pixel capture window)
        if (rect.width < 10 || rect.height < 10) return;

        const seat = Clutter.get_default_backend().get_default_seat();
        if (!seat) return;

        const [x, y] = global.get_pointer();

        if (x >= rect.x && x < rect.x + rect.width && y >= rect.y && y < rect.y + rect.height) return;

        seat.warp_pointer(
            rect.x + Math.floor(rect.width / 2),
            rect.y + Math.floor(rect.height / 2),
        );
    }
}
