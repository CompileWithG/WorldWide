import{r as i,u as p,b as f,j as s,a as e,B as h}from"./index-32bbb352.js";import{P as g}from"./PageNav-e4e47eb2.js";import"./Logo-452b0575.js";const w="_login_1mydq_1",v="_form_1mydq_8",y="_row_1mydq_22",t={login:w,form:v,row:y};function x(){const[o,m]=i.useState("jack@example.com"),[r,c]=i.useState("qwerty"),{login:d,isAuthenticated:n}=p(),l=f();function u(a){a.preventDefault(),o&&r&&d(o,r)}return i.useEffect(function(){n&&l("/app",{replace:!0})},[n,l]),s("main",{className:t.login,children:[e(g,{}),s("form",{className:t.form,onSubmit:u,children:[s("div",{className:t.row,children:[e("label",{htmlFor:"email",children:"Email address"}),e("input",{type:"email",id:"email",onChange:a=>m(a.target.value),value:o})]}),s("div",{className:t.row,children:[e("label",{htmlFor:"password",children:"Password"}),e("input",{type:"password",id:"password",onChange:a=>c(a.target.value),value:r})]}),e("div",{children:e(h,{type:"primary",children:"Login"})})]})]})}export{x as default};
