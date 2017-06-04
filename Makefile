test:
	node tests/basictests.js

pushall:
	git push origin master && npm publish

update-iscool:
	git pull origin master && \
		npm update --save iscool && \
		git commit -a -m"Updated iscool." && \
		npm version patch &&
		make pushall
