var html = '<div style="background-color:grey;padding:15px;display: inline-block;width: 100%;">';
html += '<p style="text-align:center; color: white;margin-top: 0;margin-bottom: 0;font-size: 24px;">For more information on the COVID-19 pandemic, please visit <a style="color: white; text-decoration: underline;" href="https://sacoronavirus.co.za/" target="_blank">sacoronavirus.co.za</a></p>';
const div = document.createElement("div");
div.innerHTML = html;
document.body.insertBefore(div, document.body.firstChild);
