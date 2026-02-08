# 📝 Git Repository Setup Guide

## ✅ Files Created

### 1. `.gitignore` ✅ Updated
**Purpose**: Tells Git which files to ignore and never commit.

**What's Ignored**:
- ✅ `node_modules/` - Dependencies (18,000+ files)
- ✅ `.env` files - Sensitive API keys & secrets
- ✅ Build outputs - `android/app/build/`, `ios/build/`
- ✅ IDE files - `.vscode/`, `.idea/`
- ✅ OS files - `.DS_Store`, `Thumbs.db`
- ✅ Package locks - `package-lock.json`, `yarn.lock`
- ✅ Pods - `ios/Pods/`, `ios/Podfile.lock`
- ✅ Logs - `*.log`
- ✅ Temporary files - `tmp/`, `temp/`

---

### 2. `.gitattributes` ✅ Created
**Purpose**: Ensures consistent line endings across different operating systems.

**Benefits**:
- Prevents Windows (CRLF) vs Unix (LF) line ending conflicts
- Auto-handles text vs binary files
- Team collaboration made easier

---

### 3. `.env.example` ✅ Created
**Purpose**: Template for environment variables (API keys, secrets).

**Usage**:
```bash
# Copy to .env and add your real keys
cp .env.example .env

# Edit .env with your actual values
# .env is in .gitignore - safe from commits!
```

---

### 4. `.npmrc` ✅ Created
**Purpose**: NPM configuration for consistent package management.

**Features**:
- Enforces Node version
- Saves exact dependency versions
- Prevents peer dependency issues

---

## 🚀 Git Setup Commands

### First Time Setup

```bash
# 1. Initialize Git repository
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial commit: Production-grade React Native e-commerce app with Redux + Navigation"

# 4. Add remote repository (GitHub/GitLab/Bitbucket)
git remote add origin https://github.com/YOUR_USERNAME/shopify-app.git

# 5. Push to remote
git push -u origin main
```

---

## 📋 Pre-Commit Checklist

Before committing, verify:

### ✅ Environment Files
```bash
# Never commit these!
.env
.env.local
.env.production

# Only commit the template
.env.example  ✅
```

### ✅ Dependencies
```bash
# Don't commit
node_modules/        ❌
package-lock.json    ❌ (unless your team uses it)
ios/Pods/            ❌

# Do commit
package.json         ✅
ios/Podfile          ✅
```

### ✅ Build Outputs
```bash
# Don't commit
android/app/build/   ❌
ios/build/           ❌
*.apk, *.ipa        ❌

# Do commit
android/app/src/     ✅
ios/AwesomeProject/  ✅
```

### ✅ IDE Files
```bash
# Don't commit
.vscode/             ❌
.idea/               ❌

# Optional: Commit shared IDE settings
.vscode/settings.json  ✅ (if team uses)
```

---

## 🔐 Protecting Sensitive Information

### Critical Files to NEVER Commit:

```bash
# API Keys & Secrets
.env
.env.local
.env.production
config/secrets.yml

# Android Signing Keys
*.keystore
*.jks
my-release-key.keystore

# iOS Certificates
*.p12
*.p8
*.mobileprovision
*.cer

# Google Services
google-services.json     # Android Firebase
GoogleService-Info.plist # iOS Firebase
```

---

## 🌿 Git Workflow (Best Practices)

### Branch Strategy

```bash
# Main branches
main           # Production-ready code
develop        # Development integration

# Feature branches
feature/user-authentication
feature/payment-integration
feature/product-detail-screen

# Bugfix branches
bugfix/cart-calculation-error
bugfix/image-loading-issue

# Release branches
release/v1.0.0
release/v1.1.0
```

### Example Workflow

```bash
# 1. Create feature branch
git checkout -b feature/wishlist

# 2. Make changes and commit
git add .
git commit -m "feat: Add wishlist functionality"

# 3. Push to remote
git push origin feature/wishlist

# 4. Create Pull Request on GitHub/GitLab

# 5. After approval, merge to develop
git checkout develop
git merge feature/wishlist

# 6. Delete feature branch
git branch -d feature/wishlist
```

---

## 📝 Commit Message Convention

Use **Conventional Commits** format:

```bash
# Format
<type>(<scope>): <subject>

# Types
feat:     # New feature
fix:      # Bug fix
docs:     # Documentation
style:    # Formatting, missing semicolons
refactor: # Code refactoring
test:     # Adding tests
chore:    # Maintenance tasks

# Examples
git commit -m "feat(cart): Add quantity increment/decrement buttons"
git commit -m "fix(auth): Resolve token refresh issue"
git commit -m "docs: Update README with installation steps"
git commit -m "refactor(api): Move API calls to service layer"
git commit -m "style(components): Format code with Prettier"
git commit -m "chore(deps): Update React Navigation to v7"
```

---

## 🔍 Check What Will Be Committed

```bash
# See what files changed
git status

# See actual changes
git diff

# See staged changes
git diff --cached

# Check what's ignored
git status --ignored
```

---

## 🚨 Emergency: Committed Sensitive File?

If you accidentally committed `.env` or API keys:

### Remove from Git (file still on disk)
```bash
# Remove from tracking
git rm --cached .env

# Commit the removal
git commit -m "chore: Remove .env from tracking"

# Push
git push
```

### Remove from History (Nuclear Option)
```bash
# WARNING: This rewrites history!
# Only use if you committed secrets

# Remove file from all commits
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (coordinate with team!)
git push origin --force --all
```

### After removing secrets:
1. **Invalidate the exposed secrets immediately**
2. Generate new API keys
3. Update `.env.example` (without real values)
4. Add to `.gitignore` if not already there

---

## 🎯 What SHOULD Be Committed

```bash
✅ Source code (src/)
✅ Configuration files (tsconfig.json, babel.config.js)
✅ Package.json
✅ iOS/Android project files (not builds)
✅ Documentation (README.md, *.md)
✅ Assets (images, fonts)
✅ Tests
✅ .gitignore, .gitattributes
✅ .env.example (template only)
```

---

## 🚫 What Should NEVER Be Committed

```bash
❌ node_modules/
❌ .env (with real secrets)
❌ Build outputs (android/app/build/, ios/build/)
❌ IDE files (.vscode/, .idea/)
❌ OS files (.DS_Store, Thumbs.db)
❌ Package locks (team decision)
❌ Pods (ios/Pods/)
❌ Signing keys (*.keystore, *.p12)
❌ API keys and secrets
❌ Local config (local.properties)
❌ Logs (*.log)
```

---

## 📊 Repository Size Management

```bash
# Check repository size
du -sh .git

# See largest files
git rev-list --objects --all | \
  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | \
  sed -n 's/^blob //p' | \
  sort --numeric-sort --key=2 | \
  tail -n 10

# If repo is too large, consider:
# - Git LFS for large binary files
# - Removing old build artifacts from history
```

---

## 🔄 Syncing with Team

```bash
# Before starting work
git pull origin develop

# See what others changed
git log --oneline --graph --all

# Fetch without merging
git fetch origin

# Compare with remote
git diff origin/main
```

---

## 🛠️ Useful Git Commands

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Discard local changes
git checkout -- .

# Stash changes temporarily
git stash
git stash pop

# View commit history
git log --oneline --graph

# See who changed what
git blame src/App.tsx

# Create .gitignore after initial commit
git rm -r --cached .
git add .
git commit -m "chore: Apply .gitignore rules"
```

---

## 📱 Platform-Specific Notes

### iOS
```bash
# Commit
✅ ios/Podfile
✅ ios/AwesomeProject.xcodeproj/

# Don't commit
❌ ios/Pods/
❌ ios/build/
❌ ios/Podfile.lock
```

### Android
```bash
# Commit
✅ android/app/src/
✅ android/app/build.gradle

# Don't commit
❌ android/app/build/
❌ android/.gradle/
❌ android/local.properties
```

---

## 🎓 Learn More

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Gitignore Templates](https://github.com/github/gitignore)

---

## ✅ Quick Verification

After setup, verify:

```bash
# 1. Check .gitignore is working
git status

# Should NOT see:
# - node_modules/
# - .env
# - build/

# 2. Check file count (should be ~300-500, not 20,000+)
git ls-files | wc -l

# 3. Check what's tracked
git ls-files

# 4. Verify .env is ignored
git check-ignore .env
# Should output: .env

# 5. Test commit
git add .
git commit -m "test: Verify git setup"
```

---

## 🎉 You're Ready!

Your repository is now properly configured with:

✅ Comprehensive `.gitignore`  
✅ `.gitattributes` for line endings  
✅ `.env.example` for secrets template  
✅ `.npmrc` for NPM config  
✅ Best practices documented  

**Safe to commit and push!** 🚀
