#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
mapfile -t SRC < <(find . -name '*.java' | sort)
# -d . is required so packaged classes (e.g. aquadig.AquaDig) land in aquadig/*.class, not next to each .java
javac -encoding UTF-8 -d . "${SRC[@]}"
exec java -cp . aquadig.AquaDig "$@"
