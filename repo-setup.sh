#!/bin/bash

# Install Bun for folks

curl -fsSL https://bun.sh/install | bash

bun install
bun run build
