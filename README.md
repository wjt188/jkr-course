# jkr-course
记录吉科软培训课程demo code
前端学习社区：https://developer.mozilla.org/zh-CN/
git代码提交规范：
    1. 克隆代码：git clone
    2. 新建独立分支：new branch
    3. 切换分支，再此分支进行开发：git checkout dev
    4. 开发完成或者修改代码：git add .   git commit -m "注释，业务逻辑改动或者需求变动"
    5. 推送至远程分支:git push
    6. merger master or merge dev :先切换分支，再执行merge操作
    7. 每次开始开发之前，先拉取最新代码，切换至自己的代码分支：git checkout feature-jkr-XXX   git pull
merge操作流程：
    1. 提交code之后，git checkout master
    2. git merge dev
    3. git checkout dev
其余规范参见斌哥所见文档：《git提交规范》
