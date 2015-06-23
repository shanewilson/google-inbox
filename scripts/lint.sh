#!/bin/bash
noflow=$(git ls-files | egrep '^src.*\.jsx?$' | grep -v 'test' | xargs grep --files-without-match '@flow')
if [ -n "$noflow" ]; then
  echo 'These files are missing @flow annotations:'
  echo "$noflow"
  exit 1
fi
