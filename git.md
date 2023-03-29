### git

`git init - 新增一個儲存庫`

`git clone [url] - 複製遠端的 Repository 檔案到本地端`

`git status - 檢查本地端檔案異動狀態`

`git add [檔名] - 將指定的檔案加入版控，使用 git add . 將會加入全部`

`git commit -m ["提交說明內容"] - 提交目前的異動並透過 -m 參數設定提交內容摘要`

`git log - 查看先前的 commit 紀錄`

`git push - 將本地端 Repository 的 commit 發佈到遠端 `

`git push origin [BRANCH_NAME] - 發佈至遠端指定的分支(Branch)`

`git pull - 將檔案從遠端抓取下來，並合併本地的版本`

`git branch - 查看分支`

`git branch [BRANCH_NAME] - 建立分支`

`git checkout [BRANCH_NAME] - 切換到指定的分支`

`git checkout -b [BRANCH_NAME] - 建立並跳到該分支`

`git branch -D [BRANCH_NAME] - 強制刪除指定分支(先切換至其他分支再做刪除)`

`git reset --hard [HASH] - 強制恢復到指定的 commot (透過 Hash 值)`

`git checkout [HASH] - 切換到指定的 commit (與 git checkout [BRANCH_NAME] 相同)`

`git branch -m <OLD_BRANCH_NAME> <NEW_BRANCH_NAME> - 修改分支名稱`