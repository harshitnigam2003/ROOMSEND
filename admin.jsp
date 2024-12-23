
<%@page contentType="text/html" pageEncoding="UTF-8"
        import="java.sql.*"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sq" %>



<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    
    <body>
        
        <%
            String name=request.getParameter("searchfield");
            
            
if(name.equals("ram"))
{
response.sendRedirect("album.html");
} else
{
    out.println("wrong name");
}
        %>
		
    </body>
</html>
