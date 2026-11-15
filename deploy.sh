#!/bin/bash

set -e
# Disable AWS interactive pager
export AWS_PAGER=""

COMMAND=$(echo "$1" | tr '[:lower:]' '[:upper:]')

build() {
    echo "Building Next.js..."
    npm run build
    echo "Build completed!"
}

deploy() {
    echo "Uploading to S3..."
    aws s3 sync out/ "s3://island-beam-timber" \
        --region "us-east-1" \
        --delete
    echo "Deployment completed!"
}

invalidate() {
    echo "Invalidating CloudFront..."
    aws cloudfront create-invalidation \
        --distribution-id "E1Q2XE7JWZBB78" \
        --paths "/*"
    echo "CloudFront invalidation initiated!"
}

case "$COMMAND" in
    B)
        build
        ;;
    D)
        deploy
        ;;
    I)
        invalidate
        ;;
    A)
        build
        deploy
        invalidate
        echo "Full deployment completed!"
        ;;
    *)
        echo "Usage: ./deploy.sh [B|D|I|A]"
        echo ""
        echo "B = Build"
        echo "D = Deploy to S3"
        echo "I = Invalidate CloudFront"
        echo "A = Build + Deploy + Invalidate"
        exit 1
        ;;
esac
exit 0