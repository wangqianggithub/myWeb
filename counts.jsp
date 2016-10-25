<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%!
    int num=0;
    synchronized void add(){
        num++;
    }
%>
<% add(); %>
<html>
<head>
    <title></title>
</head>

<body>
<div style="color:#333;font-size: 18px;font-family:'微软雅黑';">
    <span style="font-size: 14px;margin-right: 10px;">访问量：</span><span style="color:darkred;font-family: Arial;"><%=num%></span>
</div>
</body>
</html>
