#!/usr/bin/env bash
# Compile AquaDig and pack aquadig.jar for CheerpJ (place alongside index.html and serve over HTTP).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"
BUILD="build/classes"
rm -rf build
mkdir -p "$BUILD"

mapfile -t SRC < <(find . \( -path './build' -prune \) -o -name '*.java' -print | sort)
# CheerpJ supports bytecode up to Java 17 (--release sets language level + API + class file version).
javac --release 17 -encoding UTF-8 -d "$BUILD" "${SRC[@]}"

shopt -s nullglob
if [[ -d res ]]; then
  mkdir -p "$BUILD/res"
  cp -rp res/. "$BUILD/res/"
fi
cp -rp META-INF "$BUILD/"

# Merge desktop main class into MIDlet manifest (MIDlet.getAppProperty reads META-INF/MANIFEST.MF).
cp -f web-jar-manifest.mf "$BUILD/META-INF/MANIFEST.MF"

jar cfm "$ROOT/aquadig.jar" "$BUILD/META-INF/MANIFEST.MF" -C "$BUILD" .
rm -rf "$ROOT/build"
echo "Wrote $ROOT/aquadig.jar (serve this directory over HTTP with index.html)."
