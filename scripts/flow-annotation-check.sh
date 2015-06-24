#!/bin/bash
WHITE=$(tput setaf 7)
NORMAL=$(tput sgr0)

noflow=$(git ls-files | egrep '^src.*\.jsx?$' | grep -v 'test' | xargs grep --files-without-match '@flow')
if [ -n "$noflow" ]; then
  echo "These files are missing ${WHITE}@flow${NORMAL} annotations:"
  echo "$noflow"
  exit 1
fi
