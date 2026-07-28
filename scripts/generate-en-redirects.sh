#!/usr/bin/env bash

set -euo pipefail

source_dir="${1:-public/en}"
destination_dir="${2:-public/ru/en}"
target_origin="${3:-https://docs.eh.industries}"

if [[ ! -d "$source_dir" ]]; then
  echo "English build directory does not exist: $source_dir" >&2
  exit 1
fi

find "$source_dir" -type f -name index.html -print0 |
  while IFS= read -r -d '' source_file; do
    relative_file="${source_file#"$source_dir"/}"
    relative_path="${relative_file%index.html}"
    target_url="${target_origin%/}/${relative_path}"
    destination_file="$destination_dir/$relative_file"

    mkdir -p "$(dirname "$destination_file")"

    cat > "$destination_file" <<EOF
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex,follow">
    <meta http-equiv="refresh" content="0; url=${target_url}">
    <link rel="canonical" href="${target_url}">
    <title>Documentation moved</title>
    <script>
      (function () {
        var target = new URL("${target_url}");
        target.search = window.location.search;
        target.hash = window.location.hash;
        window.location.replace(target.toString());
      }());
    </script>
  </head>
  <body>
    <p>The English documentation has moved to <a href="${target_url}">${target_url}</a>.</p>
  </body>
</html>
EOF
  done
