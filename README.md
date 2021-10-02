`1: Quyển báo cáo `
`2: Slide báo cáo `
`3: Demo phần mềm `

` Quyển báo cáo `
<!-- 
    Giới thiệu: 
    Đặt vấn đề : 
        - lý do thực hiện
        - mục tiêu cách giải quyết
    Nội dụng nghiên cứu

    II> Đặt tả yêu cầu
        - có những chức năng gì
    
    CHương II;
        THiết kế:
            kiến trúc tổng thể side-map
            - mô tả chức năng: bao gồm các bước ntn ??
            - thiết kế cơ sở dữ liệu ntn??

        Cài đặt chương trình: (không cần chụp code)
            - mô tả hướng dẫn cài đặt chương trình, cài đặt những gì
    Chương IV
        đánh giá kiểm thử phần mềm;

    Kết luận 
    Hướng phát triển

    Tài liệu tham khảo
    phụ lục kèm theo nếu có

 -->


`install Node and Express JS `

## npm install node

## npm install express

`chạy Express JS `
## node <tên file js>

`Cài nodemon sử dụng để lắng nghe sự thay đổi và cập nhật khi file có sự thay đổi`

## npm i nodemon --save-dev

`How to you nodemon?`

` Trong file package.json thêm lệnh`
## "Script" :{
##  "start": "nodemon index.js",
##  ... 
## }

` Thư viện MORGAN quan sát log của request ở Client lên Server`

## npm i morgan --save-dev

=> sử dụng <const morgan = require('morgan');>
            <app.use(morgan('combined'))>

`Template engines: Express handlebars`
## npm i express-handlebars

` SCSS usge`
`được dùng để render ra file css `

## node-sass <option> <input>  <output> 

## "Script" :{
##  "scss": "node-sass --watch src/resources/scss/app.scss src/public/app.css",
##  ... 
## }


`Basic routing `


` Mô hình MVC ` 
> Model View Controller
View: chứa phần HTML & css
Model: chứa thành phần lấy ra dữ liệu từ MySQL 
Contronler: thành phần trung gian giữa Model và View


` format code`
>prettier
>lint-staged
>husky

npm i prettier lint-staged husky --save-dev


