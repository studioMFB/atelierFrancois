# Build.
npm run build

# Commit changes to the master branch.
git add --all 
# git commit -a
git commit -m 'adding dist subtree'

# Make GitHub pages a subtree of our master branch.
#  git subtree push --prefix atelierFrancois https://github.com/studioMFB/atelierFrancois.git master --squash
 git subtree push --prefix atelierFrancois https://github.com/studioMFB/atelierFrancois.git master

# Stop Terminal closing itself
$SHELL