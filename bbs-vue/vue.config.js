module.exports = {
    pages: {
        HomePage: {
            entry: './src/pages/HomePage/HomePage.js', // 指定你刚才创建的index.js位置
            template: './src/pages/HomePage/HomePage.html',    // 主的htmml页面位置
            filename: 'HomePage.html',
            title: 'home Page'
   		 },
		Register: {
			entry: './src/pages/Register/Register.js', // 指定你刚才创建的index.js位置
			template: './src/pages/Register/Register.html',    // 主的htmml页面位置
			filename: 'Register.html',
			title: 'Register Page'
		}
}
}

