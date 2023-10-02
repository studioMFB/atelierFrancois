# Build.
npm run build

git fetch
git pull
# Commit changes to the master branch.
git add --all 
# git commit -a
git commit -m 'adding dist subtree'

# Make GitHub pages a subtree of our master branch.
#  git subtree push --prefix atelierFrancois https://github.com/studioMFB/atelierFrancois.git master --squash
 git subtree add --prefix atelierFrancois https://github.com/studioMFB/atelierFrancois.git master
 git subtree pull --prefix atelierFrancois https://github.com/studioMFB/atelierFrancois.git master
 git subtree push --prefix atelierFrancois https://github.com/studioMFB/atelierFrancois.git master
#  git subtree push --prefix dist origin atelierFrancois

# Stop Terminal closing itself
$SHELL