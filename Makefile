NAME=mouse-warp
DOMAIN=acristoffers.me
INSTALL_DIR=~/.local/share/gnome-shell/extensions/$(NAME)@$(DOMAIN)

.PHONY: all pack install enable disable clean

all: pack

$(NAME).zip: extension.js metadata.json
	@zip $(NAME).zip -9 extension.js metadata.json

pack: $(NAME).zip

install: pack
	@mkdir -p $(INSTALL_DIR)
	@cp extension.js metadata.json $(INSTALL_DIR)/

enable:
	@gnome-extensions enable $(NAME)@$(DOMAIN)

disable:
	@gnome-extensions disable $(NAME)@$(DOMAIN)

clean:
	@rm -f $(NAME).zip
