<script>
var html = '<div style="background-color:red;padding:30px;display: inline-block;width: 100%;">';
html += '<p style="text-align:center; color: white;margin-top: 0;margin-bottom: 0;margin-left: 100px;font-size: 24px;">Stop the spread of misinformation about COVID-19! Get the facts at <a style="color: white; text-decoration: underline;" href="https://sacoronavirus.co.za/">sacoronavirus.co.za</a></p>';
html += '<p style="text-align: center;color: white;">Enforced by Department of Health of South Africa. Get this notice for your site at <a style="color: white; text-decoration: underline;" href="https://www.itfirst.co.za/covid19">itfirst.co.za/covid19</a></p>'
html += '</div>';

const div = document.createElement("div");
div.innerHTML = html;
document.body.insertBefore(div, document.body.firstChild);
</script>
