.PHONY: build deploy

# Trailing '/' is important
DEST_DIR := dist/GradingApp/
DEPLOY_TARGET := csweb:/webroot/apps/grading/

build:
	npm run build -- --configuration production

deploy: build
	rsync -rxi --delete-after ${DEST_DIR} ${DEPLOY_TARGET}
