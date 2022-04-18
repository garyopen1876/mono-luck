# 抽籤邏輯程式 執行教學
## 請先將專案Clone下來
```
git clone https://github.com/monosparta/mono-luck-chores.git
```
## 檢查電腦是否有Python環境，且pip已設定置環境變數內
檢查Python
```
python --version
```
檢查pip
```
pip --version
```
若Python未安裝，根據電腦的作業系統來選擇安裝的檔案，[Python下載](https://www.python.org/downloads/ "Python Download")，可參考此篇[安裝教學](https://www.codingspace.school/blog/2021-04-07/ "安裝教學") ，務必勾選 __「將Python加入環境變數」__
## 使用Vscode開啟終端機，並執行程式
Mac電腦需先安裝本地端的postgresql
```
brew install postgresql
```
檢查路徑是否為```mono-luck-chores```，若否則將目錄切換至```mono-luck-chores```，再安裝所需套件，
```
cd mono-luck-chores
```
```
pip install -r requirements.txt
```
新增.env檔(測試資料庫)
```
DB_HOST = "ec2-44-192-245-97.compute-1.amazonaws.com"
DB_NAME = "ddl2k3mcgiuhm3"
DB_USER = "ednsgjkrqlpfjx"
DB_PASSWORD = "87659b9944be6515571f01f83d1045029266a25a07461841837d688ce6ca8de0"
DB_SSLMODE = "allow"
```
檢查路徑是否為```mono-luck-chores\src```，若否則將目錄切換至```src```
```
cd src
```
執行程式碼
```
python main.py
```
恭喜您已成功

