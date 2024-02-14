### npm inistilizator ochadi

`npm init -y` 


### devDependencies uchun webpack yuklash
`npm install webpack --save-dev` 


`devDependencies` - bu dastur kodni compile qiladi va o'chiriladi u serverda doimiy turmaydi
`Dependencies` - esa serverda doim turishi kerak bo'lgan muxim kutubxonalarni o'z ichiga oladi

**webpack cmd commandlar orqali boshqariladi va bu commond larni u tushinmaydi
tushinishi uchun unga qo'shimcha yordamchi modul o'rnatiladi**

### `nmp install webpack-cli --save-dev` 
`cli` - commond line interface

### Webpackni o'chirish

`npm uninstall webpack`

Ushbu kod faqatgina webpackni o'zini o'chiriadi, agar biz webpack va webpack-cli ni birgalikda o'chirmoqchi bo'lsak.

`nmp uninstall webpack webpack-cli`


### O'rnatishning qisqa usuli

`npm i -D webpack webpack-cli`

Ushbu o'rnatish usulida [webpack] hamda [webpack-cli] ni dasturchilar uchun bo'lgan versiyasini o'rnatadi. 



*****************************************************
Bitta js fileda faqat bir marta `export default` ishlatish mumkin.